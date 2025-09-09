import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

// Initialize Supabase client with service role for database operations
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Lazy initialize Resend to handle missing API key gracefully
let resend: Resend | null = null;
const getResend = () => {
  if (!resend) {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }
    resend = new Resend(apiKey);
  }
  return resend;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("=== EDGE FUNCTION CALLED ===");
  console.log("Method:", req.method);
  console.log("Headers:", Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("=== PROCESSING CONTACT FORM ===");
    const bodyText = await req.text();
    console.log("Raw body:", bodyText);
    
    const { name, email, phone, company, message }: ContactEmailRequest = JSON.parse(bodyText);
    console.log("Parsed data:", { name, email, company });

    console.log("Processing contact submission for:", { name, email, company });

    // First, save to database using service role (bypasses RLS)
    const { data: submission, error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        message
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Saved to database:", submission.id);

    // Try to send email, but don't fail if email service is unavailable
    try {
      console.log("=== ATTEMPTING EMAIL SEND ===");
      console.log("Getting Resend client...");
      const resendClient = getResend();
      console.log("Resend client initialized successfully");
      
      const emailPayload = {
        from: "Hayat Flour Mills <no-reply@hayatflourmills.com>",
        reply_to: email,
        to: ["info@hayatflourmills.com"],
        subject: `New Contact Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This message was sent through the Hayat Flour Mills contact form.</em></p>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

---
This message was sent through the Hayat Flour Mills contact form.
        `.trim(),
      };
      
      console.log("Email payload:", JSON.stringify(emailPayload, null, 2));
      console.log("Sending email via Resend...");
      
      const emailResponse = await resendClient.emails.send(emailPayload);
      console.log("Email response received:", JSON.stringify(emailResponse, null, 2));

      if (emailResponse.error) {
        throw new Error(`Resend API error: ${JSON.stringify(emailResponse.error)}`);
      }

      console.log("Email sent successfully with ID:", emailResponse.id);

      return new Response(JSON.stringify({ 
        success: true, 
        submissionId: submission.id,
        emailId: emailResponse.id 
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);
      
      return new Response(JSON.stringify({ 
        success: false, 
        submissionId: submission.id,
        error: emailError.message
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);