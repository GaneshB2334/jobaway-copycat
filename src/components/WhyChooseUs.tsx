import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Retain Top Talent",
    description: "Providing clear career paths and growth opportunities is key to retaining top talent.",
  },
  {
    icon: Shield,
    title: "Stay Compliant",
    description: "Educate employees about compliance requirements through regular training",
  },
  {
    icon: TrendingUp,
    title: "Improve Employee",
    description: "Invest in employee training development programs enhance skill and knowledge.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-accent group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent/80 p-0 h-auto font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
