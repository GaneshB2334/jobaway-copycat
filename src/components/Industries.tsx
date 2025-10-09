import {
  ArrowRight,
  Stethoscope,
  Coffee,
  Building2,
  ShoppingBag,
  MonitorCheck,
  Truck,
  Wrench,
  BookOpen,
  DollarSign,
  Home,
  Sparkles,
  Users,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    staffs: 3200,
    growth: "+15%",
    description: "Medical professionals and healthcare support staff",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Coffee,
    name: "Hospitality",
    staffs: 2256,
    growth: "+12%",
    description: "Hotels, restaurants, and service industry professionals",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Building2,
    name: "Manufacturing",
    staffs: 4100,
    growth: "+18%",
    description: "Production, quality control, and industrial workforce",
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    staffs: 1740,
    growth: "+8%",
    description: "Sales associates, managers, and customer service staff",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: MonitorCheck,
    name: "IT & Technology",
    staffs: 2900,
    growth: "+25%",
    description: "Software developers, IT support, and tech specialists",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    staffs: 2100,
    growth: "+14%",
    description: "Drivers, warehouse staff, and supply chain experts",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Wrench,
    name: "Construction",
    staffs: 1980,
    growth: "+10%",
    description: "Skilled trades, project managers, and construction workers",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: BookOpen,
    name: "Education",
    staffs: 1200,
    growth: "+7%",
    description: "Teachers, administrators, and educational support staff",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: DollarSign,
    name: "Finance & Banking",
    staffs: 1100,
    growth: "+16%",
    description: "Financial analysts, advisors, and banking professionals",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Home,
    name: "Food Service",
    staffs: 1408,
    growth: "+11%",
    description: "Chefs, servers, and food service professionals",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Sparkles,
    name: "Events & Entertainment",
    staffs: 3948,
    growth: "+20%",
    description: "Event coordinators, performers, and entertainment staff",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Users,
    name: "General Labor",
    staffs: 2984,
    growth: "+13%",
    description: "Multi-skilled workers across various industries",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
  },
];

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Active Staff Members" },
  { icon: Building2, value: 12, suffix: "", label: "Industries Served" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Client Satisfaction" },
  { icon: Award, value: 500, suffix: "+", label: "Partner Companies" },
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(industries.length).fill(false),
  );
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate industry cards
          industries.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 },
    );

    // Stats animation observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          stats.forEach((stat, index) => {
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
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.5 },
    );

    const section = document.getElementById("industries-section");
    const statsSection = document.getElementById("stats-section");

    if (section) observer.observe(section);
    if (statsSection) statsObserver.observe(statsSection);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, [isStatsVisible]);

  return (
    <section
      id="industries-section"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-blue-300/5 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-16 right-16 opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-spin-slow"
        >
          <polygon points="50,10 90,80 10,80" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-16 opacity-15">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="animate-float"
        >
          <circle cx="60" cy="60" r="50" fill="#8b5cf6" opacity="0.4" />
          <rect
            x="20"
            y="20"
            width="80"
            height="80"
            rx="20"
            fill="#3b82f6"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6">
            <Target className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Industries
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Industries We
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Proudly Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From healthcare to technology, we provide specialized staffing
            solutions across diverse industries, connecting top talent with
            leading organizations nationwide.
          </p>
        </div>

        {/* Stats Section */}
        <div
          id="stats-section"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isVisible = visibleCards[index];
            const isActive = activeIndustry === index;

            return (
              <div
                key={industry.name}
                className={`group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 cursor-pointer transform hover:-translate-y-3 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isActive ? "scale-105 shadow-2xl" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveIndustry(index)}
                onMouseLeave={() => setActiveIndustry(null)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 ${industry.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                  ></div>
                  <Icon className="w-7 h-7 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {industry.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-indigo-600">
                    {industry.staffs}
                  </span>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {industry.growth}
                  </span>
                </div>
                <p className="text-gray-500 text-xs font-medium mb-4">
                  Active Staff Members
                </p>

                {/* Description - appears on hover */}
                <div className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <p className="text-sm text-gray-600 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
                    {industry.description}
                  </p>
                </div>

                {/* Growth Indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Corner Decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Staff in Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Whether you're in healthcare, technology, manufacturing, or any
              other sector, we have the expertise and talent pool to meet your
              specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                Find Your Industry
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                Custom Solutions
              </button>
            </div>
          </div>

          {/* View All Button */}
          <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-all duration-300 bg-indigo-50 hover:bg-indigo-100 px-8 py-4 rounded-full border-2 border-indigo-200 hover:border-indigo-300 transform hover:scale-105">
            View All Industries
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Industries;
