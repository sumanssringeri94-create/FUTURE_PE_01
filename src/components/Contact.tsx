import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-foreground via-spice to-secondary rounded-3xl p-8 md:p-16 text-center mb-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              Your Table is Waiting
            </h2>
            <p className="text-cream/80 text-lg max-w-xl mx-auto mb-8">
              Walk in anytime or call ahead for groups. We keep a few tables 
              reserved for our regulars—and new friends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                +91 98765 43210
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Find Us
            </h3>
            <p className="text-muted-foreground">
              UDPI UPAHARA<br />
              Main Road, Hosaroad<br />
              Bangalore - 560100
            </p>
            <Button variant="link" className="mt-4">
              Get Directions →
            </Button>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Opening Hours
            </h3>
            <div className="text-muted-foreground space-y-1">
              <p><span className="text-foreground font-medium">Breakfast:</span> 7AM - 11AM</p>
              <p><span className="text-foreground font-medium">Lunch:</span> 12PM - 4PM</p>
              <p><span className="text-foreground font-medium">Dinner:</span> 6PM - 10PM</p>
            </div>
            <p className="text-sm text-primary mt-4 font-medium">
              Open all 7 days
            </p>
          </div>

          {/* Quick Contact */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Call Ahead
            </h3>
            <p className="text-muted-foreground mb-4">
              For parties of 6+ or special requests, 
              a quick call helps us serve you better.
            </p>
            <p className="text-2xl font-display font-bold text-foreground">
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Trusted by <span className="text-foreground font-medium">1000+ families</span> in Hosaroad & surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
