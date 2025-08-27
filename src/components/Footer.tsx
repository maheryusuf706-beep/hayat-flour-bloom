import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Brands", href: "#brands" },
    { name: "Contact", href: "#contact" },
  ];

  const brands = [
    { name: "Abaa Premium Flour", href: "#brands" },
    { name: "Sima Poa Flour", href: "#brands" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif font-bold mb-4">
              Hayat Flour Mills Ltd.
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              We're committed to producing the finest quality flour, 
              combining traditional milling expertise with modern technology to serve 
              communities across the region.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span className="text-sm text-white/80">Kasarani Msa-Nbo Highway, Voi, Taita-Taveta</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <div className="text-sm text-white/80 space-x-2">
                  <a 
                    href="tel:0785880880"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.confirm("Call 0785880880?")) {
                        window.location.href = "tel:0785880880";
                      }
                    }}
                    className="hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    0785880880
                  </a>
                  <span>/</span>
                  <a 
                    href="tel:0762880880"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.confirm("Call 0762880880?")) {
                        window.location.href = "tel:0762880880";
                      }
                    }}
                    className="hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    0762880880
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a 
                  href="mailto:info@hayatflourmills.com"
                  className="text-sm text-white/80 hover:text-brand-gold transition-colors"
                >
                  info@hayatflourmills.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <a 
                    href={brand.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-200 text-sm"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <div className="text-sm text-white/80 space-y-1">
                <div>Mon - Fri: 8:00 AM - 5:00 PM</div>
                <div>Sat: 8:00 AM - 12:30 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577803866616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/hayat-flour-mills-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/hayatflourmills/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © {currentYear} Hayat Flour Mills Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Quality Standards</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;