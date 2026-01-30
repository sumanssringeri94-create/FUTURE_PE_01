import { Check } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      name: "South Indian Classics",
      description: "Authentic Udipi-style favorites",
      items: ["Masala Dosa", "Idli Sambar", "Uttapam", "Vada", "Pongal", "Upma"],
      highlight: "Most Popular",
      color: "primary",
    },
    {
      name: "North Indian & Chinese",
      description: "Flavorful fusion done right",
      items: ["Paneer Butter Masala", "Gobi Manchurian", "Hakka Noodles", "Fried Rice", "Chilli Paneer"],
      highlight: "Family Favorites",
      color: "secondary",
    },
    {
      name: "Italian Corner",
      description: "Comfort food with a twist",
      items: ["Pasta Arrabiata", "White Sauce Pasta", "Garlic Bread", "Pizza", "Bruschetta"],
      highlight: "New Addition",
      color: "accent",
    },
  ];

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Something for Everyone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From crispy dosas to creamy pasta—our kitchen serves Indian, Chinese, and 
            Italian cuisines. All made fresh, all made with care.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`p-6 ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-spice'}`}>
                <span className="inline-block bg-background/20 backdrop-blur-sm text-background text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {category.highlight}
                </span>
                <h3 className="font-display text-2xl font-bold text-background mb-1">
                  {category.name}
                </h3>
                <p className="text-background/80 text-sm">
                  {category.description}
                </p>
              </div>

              {/* Menu Items */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  ...and many more favorites
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-background rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Why Families Trust Us
              </h3>
              <p className="text-muted-foreground mb-6">
                We're not just another restaurant. We're your neighborhood kitchen where 
                quality meets affordability, and every meal is served with genuine care.
              </p>
              <ul className="space-y-4">
                {[
                  "Made-to-order meals—never reheated, always fresh",
                  "Transparent pricing with no hidden charges",
                  "Strict hygiene standards you can see",
                  "Same trusted taste since 2010",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <div className="font-display text-6xl font-bold text-primary mb-2">15+</div>
              <p className="text-foreground font-medium mb-1">Years of Serving</p>
              <p className="text-muted-foreground text-sm">Hosaroad & Beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
