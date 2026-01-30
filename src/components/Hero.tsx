import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-spice to-secondary">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 container-width text-center px-4 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-cream text-sm font-medium">Serving Hosaroad Since 2010</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
          UDPI UPAHARA
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto mb-4 font-light">
          Where Every Meal Feels Like Home
        </p>
        
        {/* Value proposition */}
        <p className="text-cream/70 max-w-xl mx-auto mb-10 text-lg">
          Fresh, made-to-order meals for families, students, and food lovers. 
          Taste the difference of real home-style cooking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="xl" className="group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Call to Reserve
          </Button>
          <Button variant="heroOutline" size="xl">
            View Our Menu
          </Button>
        </div>

        {/* Quick Info Cards */}
        <div className="flex flex-wrap justify-center gap-6 text-cream/80">
          <div className="flex items-center gap-2 bg-cream/10 backdrop-blur-sm px-5 py-3 rounded-lg">
            <MapPin className="w-5 h-5 text-gold" />
            <span>Hosaroad, Bangalore - 560100</span>
          </div>
          <div className="flex items-center gap-2 bg-cream/10 backdrop-blur-sm px-5 py-3 rounded-lg">
            <Clock className="w-5 h-5 text-gold" />
            <span>Open Daily: 7AM - 10PM</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
