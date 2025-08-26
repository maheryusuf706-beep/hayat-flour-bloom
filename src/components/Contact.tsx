import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kasarani Msa-Nbo Highway", "Voi, Taita-Taveta", "Kenya"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0785880880", "0762880880"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hayatflourmills.com", "sales@hayatflourmills.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 8:00 AM - 12:30 PM", "Sun: Closed"]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-wheat wheat-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-brand-brown mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to experience the quality of Hayat Flour Mills? Contact us today 
              for product information, quotes, or to discuss your flour needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-muted-foreground text-sm">
                            {info.title === "Phone" ? (
                              <a 
                                href={`tel:${detail}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (window.confirm(`Call ${detail}?`)) {
                                    window.location.href = `tel:${detail}`;
                                  }
                                }}
                                className="hover:text-primary transition-colors cursor-pointer"
                              >
                                {detail}
                              </a>
                            ) : info.title === "Email" ? (
                              <a 
                                href={`mailto:${detail}`}
                                className="hover:text-primary transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Interactive Map */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-0">
                  <div className="h-48 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d38.557!3d-3.397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjMnNDkuMiJTIDM4wrAzMycyNS4yIkU!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hayat Flour Mills Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Certification & Standards Logos */}
              <Card className="border-0 shadow-soft bg-white">
                <CardContent className="p-8">
                  <div className="flex justify-center gap-12 items-center">
                    <img 
                      src="/lovable-uploads/cb64f23e-e029-4fcb-8765-340f26b631a1.png" 
                      alt="KEBS Standards"
                      className="h-32 w-auto filter drop-shadow-lg hover:scale-105 transition-transform"
                    />
                    <img 
                      src="/lovable-uploads/f393640a-34f0-469c-b1ac-ef7d6a094f01.png" 
                      alt="Fortification Program"
                      className="h-32 w-auto filter drop-shadow-lg hover:scale-105 transition-transform"
                    />
                    <img 
                      src="/lovable-uploads/081d9963-7aac-4482-aa9a-86a9a9f64324.png" 
                      alt="Heart of Hayat"
                      className="h-32 w-auto filter drop-shadow-lg hover:scale-105 transition-transform"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-border focus:border-primary"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-border focus:border-primary"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-border focus:border-primary"
                          placeholder="+254 700 123 456"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-border focus:border-primary"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-border focus:border-primary min-h-[120px]"
                        placeholder="Tell us about your flour needs, quantity requirements, or any questions you have..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-hero hover:opacity-90 hover-glow"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-primary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                For urgent inquiries or immediate support, don't hesitate to call us directly. 
                Our team is ready to help with your flour needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0785880880"
                  className="inline-flex items-center gap-2 bg-brand-gold text-primary px-6 py-3 rounded-lg font-medium hover:bg-brand-gold-light transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: 0785880880
                </a>
                <a 
                  href="mailto:info@hayatflourmills.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;