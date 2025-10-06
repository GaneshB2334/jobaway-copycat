import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe Newsletter</h2>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-foreground rounded-full px-6 h-12 border-0"
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12"
            >
              Subscribe <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
