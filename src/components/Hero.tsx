import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const floatingProfiles = [
  { name: "Waiter", image: "https://i.pravatar.cc/150?img=1", color: "badge-yellow", position: "top-20 left-[10%]" },
  { name: "Assistant", image: "https://i.pravatar.cc/150?img=2", color: "badge-cyan", position: "top-40 left-[15%]" },
  { name: "Painter", image: "https://i.pravatar.cc/150?img=3", color: "badge-purple", position: "bottom-40 left-[12%]" },
  { name: "Finance", image: "https://i.pravatar.cc/150?img=4", color: "badge-yellow", position: "top-32 right-[10%]" },
  { name: "Cleaner", image: "https://i.pravatar.cc/150?img=5", color: "badge-pink", position: "top-[45%] right-[8%]" },
  { name: "Nurse", image: "https://i.pravatar.cc/150?img=6", color: "badge-purple", position: "bottom-32 right-[12%]" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden pt-32 pb-20">
      {/* Floating Profile Avatars */}
      {floatingProfiles.map((profile, index) => (
        <div
          key={profile.name}
          className={`absolute ${profile.position} ${
            index % 2 === 0 ? "animate-float" : "animate-float-delayed"
          } hidden md:block`}
        >
          <div className="relative">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <span
              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-${profile.color} text-foreground whitespace-nowrap shadow-lg`}
              style={{
                backgroundColor: `hsl(var(--${profile.color}))`,
              }}
            >
              {profile.name}
            </span>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence in FMCG, IT Services
            <br />
            & Staffing Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Navarna is a dynamic and versatile force committed to excellence. As your strategic partner, we prioritize innovation, quality, and client satisfaction to meet your diverse business needs effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-lg font-semibold"
            >
              Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-foreground rounded-full px-8 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
