import { Shield, Award, Users, Wheat } from "lucide-react";
import millingFacility from "@/assets/milling-facility.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage of production"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Decades of experience delivering premium flour products"
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Trusted by families and businesses across the region"
    },
    {
      icon: Wheat,
      title: "Local Sourcing",
      description: "Supporting local farmers with sustainable practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-wheat wheat-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              About Hayat Flour Mills
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              For generations, we have been committed to producing the finest quality flour, 
              combining traditional milling expertise with modern technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <img 
                src={millingFacility} 
                alt="Modern flour milling facility"
                className="rounded-xl shadow-medium w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary">
                Our Story
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to provide communities with the highest quality flour, 
                Hayat Flour Mills Ltd. has grown from a small local operation to a leading 
                flour producer. Our commitment to excellence, innovation, and community support 
                has remained unwavering throughout our journey.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine time-tested milling traditions with cutting-edge technology to ensure 
                every grain of wheat is transformed into premium flour that meets the highest 
                standards of quality and nutrition.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground">
                  To provide premium quality flour products that bring families together 
                  around delicious, nutritious meals while supporting local communities 
                  and sustainable farming practices.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;