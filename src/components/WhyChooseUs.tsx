import { Cog, Shield, MapPin, Users, Heart, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality You Can Trust",
      description: "Every batch undergoes rigorous testing to ensure consistent quality, nutritious, and safe flour for your family.",
      stats: "99.9% Quality Rate"
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "State-of-the-art milling equipment and processes ensure maximum nutrition retention and optimal flour characteristics.",
      stats: "Latest Milling Tech"
    },
    {
      icon: MapPin,
      title: "Local Sourcing",
      description: "We partner with local farmers to source the finest maize, supporting our community while ensuring freshness and traceability.",
      stats: "100% Local Maize"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced millers and quality control specialists bring years of expertise to every product we create.",
      stats: "10+ Years Experience"
    },
    {
      icon: Heart,
      title: "More Than Business",
      description: "Through our Heart of Hayat initiative, part of our earnings go to humanitarian support. Choosing us means joining a cause bigger than flour.",
      stats: "10% Profit Share"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "With a strong foundation in logistics, we know how to deliver — on time, every time. That same reliability drives our milling and distribution.",
      stats: "24 Hour Delivery"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="wheat-pattern h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Why Choose Hayat Flour Mills?
            </h2>
            <div className="w-24 h-1 bg-brand-brown mx-auto mb-8"></div>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and community makes us the trusted 
              choice for quality flour products across the region.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      {reason.description}
                    </p>
                    <div className="text-brand-gold font-medium text-sm">
                      {reason.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">10+</div>
                <div className="text-white/80">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">10000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">2</div>
                <div className="text-white/80">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Experience the Hayat Difference Today
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Hayat Flour Mills 
              for their baking needs. Quality you can taste, service you can trust.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-primary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold-light transition-colors hover-glow"
            >
              Get Started Today
              <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;