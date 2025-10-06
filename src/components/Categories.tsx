import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Category</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Researching Companies <br className="hidden md:block" />
            Before Applying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Local Workers */}
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
              alt="For Local Workers"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">For Local Workers</h3>
              <p className="text-white/90 mb-6">
                Join over 1 million workers who use GravyWork to find flexible and temp to hire
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                Find Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* For Business Owner */}
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
              alt="For Business Owner"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">For Business Owner</h3>
              <p className="text-white/90 mb-6">
                Finding individuals who share your company&apos;s values and vision can contribute to a cohesive
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                Find Employee <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
