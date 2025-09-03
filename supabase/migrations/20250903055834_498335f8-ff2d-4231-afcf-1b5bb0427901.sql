-- Fix contact_submissions RLS policies to allow edge function inserts
-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "Deny public access to contact submissions" ON public.contact_submissions;

-- Create comprehensive policies that work with edge functions
CREATE POLICY "Allow public insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Deny all select on contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "Deny all update on contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "Deny all delete on contact submissions" 
ON public.contact_submissions 
FOR DELETE 
USING (false);