import {
  ArrowRight,
  Star,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  CheckCircle,
  Search,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";

const bitoStats = [
  { value: 50000, suffix: "+", label: "Active Users", icon: Users },
  { value: 10000, suffix: "+", label: "Job Listings", icon: Briefcase },
  { value: 95, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { value: 4.8, suffix: "/5", label: "User Rating", icon: Star },
];

const keyFeatures = [
  {
    icon: Search,
    label: "Smart Job Matching with AI Technology",
  },
  {
    icon: CheckCircle,
    label: "100% Verified Job Listings",
  },
  {
    icon: Building2,
    label: "Top Companies & Leading Employers",
  },
  {
    icon: Globe,
    label: "Pan-India Job Opportunities",
  },
];

const BitoJobsShowcase = () => {
  const [counters, setCounters] = useState(bitoStats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          bitoStats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 60;
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
                  newCounters[index] = parseFloat(current.toFixed(1));
                  return newCounters;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("bito-showcase");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="bito-showcase"
      className="py-20 bg-gradient-to-br from-white via-amber-50 to-amber-100"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[rgb(227,200,157)] to-amber-200 text-[rgb(146,64,14)] px-6 py-2 rounded-full text-sm font-bold shadow-md">
              Our Flagship Product
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Bito Jobs – India's Premier Job Portal
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Bito Jobs is our comprehensive job portal that connects top talent
            with leading employers. From technical recruitment to executive
            search, we've revolutionized how companies find the right
            professionals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(146,64,14)] to-amber-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          {/* Left - Image */}
          <div className="relative group">
            <img
              src="/Black White and Orange Modern Pitch Deck Presentation.png"
              alt="Bito Jobs Portal Screenshot"
              className="rounded-2xl shadow-2xl border-4 border-[rgb(227,200,157)] object-cover w-full transform group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[rgb(227,200,157)] to-amber-200 rounded-2xl -z-10"></div>
          </div>

          {/* Right - Features */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Job Portal Solutions:
            </h3>
            <div className="space-y-4 mb-8">
              {keyFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-amber-100 hover:shadow-md hover:scale-[1.02] hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(227,200,157)] to-amber-200 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-[rgb(146,64,14)]" />
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://bitojobs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[rgb(146,64,14)] to-amber-700 hover:from-amber-700 hover:to-[rgb(146,64,14)] text-white rounded-full px-8 py-4 font-bold inline-flex items-center shadow-lg hover:shadow-xl transition-all text-lg group transform hover:scale-105">
                Explore Bito Jobs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose Bito Jobs?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bitoStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-100 hover:border-[rgb(227,200,157)] hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[rgb(146,64,14)] to-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[rgb(146,64,14)] mb-2">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitoJobsShowcase;