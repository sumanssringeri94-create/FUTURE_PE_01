import { Utensils, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Utensils,
      title: "Freshly Cooked",
      description: "Every dish prepared from scratch when you order. No pre-made, no shortcuts.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Spacious seating, kid-friendly options, and prices that respect your budget.",
    },
    {
      icon: Sparkles,
      title: "Trusted Quality",
      description: "Same great taste every visit. Clean kitchen, fresh ingredients, always.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Good Food, Good People
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            At UDPI UPAHARA, we believe great food brings people together. 
            Whether you're grabbing a quick lunch, celebrating with family, or 
            catching up with friends—we're here to make it memorable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
