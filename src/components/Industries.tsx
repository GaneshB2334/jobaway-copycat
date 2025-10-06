import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bed, Coffee, Home, ShoppingBag, Sparkles, Wrench, Car, Heart } from "lucide-react";

const industries = [
  { icon: Bed, name: "Hotel", staffs: 2853 },
  { icon: Coffee, name: "Hospitality", staffs: 2256 },
  { icon: Home, name: "Kitchen", staffs: 1408 },
  { icon: ShoppingBag, name: "Retail", staffs: 1740 },
  { icon: Sparkles, name: "Special Events", staffs: 3948 },
  { icon: Wrench, name: "General Labor", staffs: 2984 },
  { icon: Car, name: "Driving", staffs: 4509 },
  { icon: Heart, name: "Senior Living", staffs: 1039 },
];

const Industries = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Industries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Industries Served
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                className="p-6 hover:shadow-xl transition-all border-2 hover:border-accent group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.staffs} Staffs</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 hover:border-accent hover:text-accent"
          >
            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
