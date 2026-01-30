import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream">
      <div className="container-width section-padding pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4">
              UDPI UPAHARA
            </h3>
            <p className="text-cream/70 max-w-md mb-6">
              Your neighborhood kitchen serving fresh, homestyle meals. 
              From South Indian classics to global favorites—made with love, served with care.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Reach Out</h4>
            <ul className="space-y-3 text-cream/70">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Hosaroad, Bangalore - 560100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@udpiupahara.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © 2024 UDPI UPAHARA. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Made with ❤️ in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
