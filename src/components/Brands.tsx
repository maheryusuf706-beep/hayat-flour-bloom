import { Star, Heart, CheckCircle, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import simaPoaImage from "@/assets/sima-poa-flour.jpg";
import abaaImage from "@/assets/abaa-flour.jpg";

const Brands = () => {
  const brands = [
    {
      name: "Sima Poa",
      tagline: "Premium Excellence",
      description: "Our flagship premium maize flour crafted for consumers who demand the finest quality and taste. Sima Poa delivers an ultra-smooth texture and authentic flavor, making it ideal for traditional meals and refined dining experiences.",
      image: simaPoaImage,
      features: [
        "Ultra-smooth premium texture",
        "Rich, natural flavor",
        "Premium maize selection",
        "Perfect for gourmet ugali and porridge"
      ],
      icon: Star,
      color: "brand-gold",
      gradient: "from-brand-gold to-brand-gold-light"
    },
    {
      name: "Abaa",
      tagline: "Everyday Quality",
      description: "Our trusted everyday maize flour that brings consistent quality and great taste to every family kitchen. Abaa makes nutritious meals accessible and affordable for everyone.",
      image: abaaImage,
      features: [
        "Great value",
        "Consistent quality",
        "Family-friendly",
        "Perfect for daily ugali and porridge"
      ],
      icon: Heart,
      color: "primary",
      gradient: "from-primary to-primary/80"
    }
  ];

  return (
    <section id="brands" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Our Flour Brands
            </h2>
            <div className="w-24 h-1 bg-brand-brown mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From premium artisan baking to everyday family meals, we offer flour brands 
              that cater to every need and budget without compromising on quality.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {brands.map((brand, index) => (
              <Card 
                key={brand.name}
                className="group overflow-hidden border-0 shadow-medium hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  {/* Brand Header */}
                  <div className={`bg-gradient-to-r ${brand.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-10">
                      <brand.icon className="h-32 w-32" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                        {brand.name}
                      </h3>
                      <p className="text-lg opacity-90">{brand.tagline}</p>
                    </div>
                  </div>

                  {/* Brand Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Product Image */}
                      <div className="order-2 md:order-1">
                        <img 
                          src={brand.image}
                          alt={`${brand.name} flour package`}
                          width="400"
                          height="400"
                          loading="lazy"
                          className="w-full h-80 object-contain rounded-lg shadow-soft hover-glow transition-all duration-300 bg-white"
                        />
                      </div>

                      {/* Brand Details */}
                      <div className="order-1 md:order-2 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {brand.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Key Features:</h4>
                          <ul className="space-y-2">
                            {brand.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-brand-gold flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <a 
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            Learn More <span className="text-xs">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-wheat rounded-xl p-8 border border-brand-gold/20">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Ready to Experience Quality?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to learn more about our flour brands and find the perfect 
                product for your baking needs.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-hero text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity hover-glow"
              >
                <DollarSign className="h-5 w-5" />
                Get Pricing Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;