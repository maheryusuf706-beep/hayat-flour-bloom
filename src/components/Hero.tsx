import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wheat-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 hero-text animate-fade-in">
            Hayat Flour Mills Ltd.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 hero-text opacity-90 animate-fade-in [animation-delay:0.2s]">
            Premium Quality Flour for Every Kitchen
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto hero-text opacity-80 animate-fade-in [animation-delay:0.4s]">
            Trusted by communities for generations, we deliver exceptional flour products 
            through advanced milling technology and unwavering commitment to quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.6s]">
            <Button 
              size="lg" 
              className="bg-brand-gold text-primary hover:bg-brand-gold-light hover-glow text-lg px-8 py-4 font-semibold"
              onClick={() => document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Brands
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;