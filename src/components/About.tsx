import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 80, suffix: "k", label: "Freelance Workers" },
  { value: 25, suffix: "%", label: "Jobs Fulfillment Rate" },
  { value: 12, suffix: "k+", label: "Jobs Filled" },
  { value: 598, suffix: "+", label: "Satisfied Businesses" },
];

const industries = [
  "Warehouse", "Hospitality", "Manufacturing", "Special Events", "General Labor",
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = stat.value;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Leading Hospitality <br className="hidden md:block" />
            Staffing Platform
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
                alt="About Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-accent border-b-8 border-b-transparent ml-1" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Watch Video</p>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              This staffing platform provides access to a diverse pool of qualified candidates
              with specialized skills in areas such as hospitality management.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">This helps businesses maintain service excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">This scalability allows businesses to adjust staffing</span>
              </li>
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Industries */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...industries, ...industries, ...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 border-2 border-border rounded-full text-foreground font-medium whitespace-nowrap"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
