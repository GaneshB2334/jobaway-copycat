import { Check, Users, Briefcase, Star, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 80, suffix: "k", label: "Freelance Workers", icon: Users },
  { value: 25, suffix: "%", label: "Jobs Fulfillment Rate", icon: Briefcase },
  { value: 12, suffix: "k+", label: "Jobs Filled", icon: Star },
  { value: 598, suffix: "+", label: "Satisfied Businesses", icon: Building2 },
];

const industries = [
  "FMCG Products",
  "IT Services",
  "Staffing Solutions",
  "Technology Innovation",
  "Business Consulting",
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative SVGs */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="opacity-30"
        >
          <circle cx="60" cy="60" r="55" fill="#6366f1" />
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            rx="12"
            fill="#f59e42"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <svg
          width="160"
          height="120"
          viewBox="0 0 160 120"
          className="opacity-20"
        >
          <ellipse cx="80" cy="60" rx="70" ry="40" fill="#3b82f6" />
          <polygon
            points="120,20 140,60 100,100"
            fill="#f97316"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* About Header */}
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2 text-indigo-700">
            About Navarna Bharat
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Focus on Innovation, Quality, and Client Satisfaction
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            Navarna is a dynamic and versatile force committed to excellence in
            FMCG, IT services, and Staffing Solutions. As your strategic
            partner, we prioritize innovation, quality, and client satisfaction
            to meet your diverse business needs effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg w-full flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p8eqNrDibps"
                title="About Us Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Watch Our Story
            </p>
          </div>

          {/* Right - Content */}
          <div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0 text-indigo-700" />
                <span className="text-gray-900 font-medium">
                  Swift market presence for FMCG products with highest industry
                  standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0 text-indigo-700" />
                <span className="text-gray-900 font-medium">
                  Tailored staffing solutions aligning talent with
                  organizational goals
                </span>
              </li>
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl shadow-sm px-4 py-5 flex items-center gap-4"
                  >
                    <div className="bg-indigo-100 rounded-full p-3">
                      <Icon className="w-7 h-7 text-indigo-700" />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-indigo-700">
                        {counters[index]}
                        {stat.suffix}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrolling Industries */}
        <div className="overflow-hidden py-4 relative">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-indigo-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-indigo-50 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-industry-scroll">
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 border-2 rounded-full font-medium whitespace-nowrap bg-white shadow-sm"
                style={{ borderColor: "#6366f1", color: "#6366f1" }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes industry-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-industry-scroll {
          animation: industry-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
