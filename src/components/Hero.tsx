import {
  ArrowRight,
  Users,
  Briefcase,
  Zap,
  Star,
  Play,
  CheckCircle,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
  { value: 500, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 1000, suffix: "+", label: "Projects Completed", icon: TrendingUp },
  { value: 25, suffix: "+", label: "Countries Served", icon: Globe },
];

const serviceCards = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Staffing Solutions",
    description: "Expert talent acquisition and workforce management",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    features: ["Talent Matching", "HR Consulting", "Workforce Planning"],
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "IT/ITES Services",
    description: "Cutting-edge technology solutions and digital transformation",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    features: ["Digital Solutions", "Tech Support", "Cloud Services"],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "FMCG Products",
    description: "Quality consumer goods with market-leading standards",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    features: ["Quality Products", "Market Reach", "Brand Excellence"],
  },
];

const Hero = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
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
            }, 50);
          });
        }
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("hero-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/15 to-blue-300/15 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-40 left-10 opacity-30">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="animate-spin-slow"
        >
          <polygon points="40,5 75,65 5,65" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-60 right-20 opacity-20">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="animate-float"
        >
          <circle cx="30" cy="30" r="25" fill="#8b5cf6" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 opacity-25">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className="animate-bounce"
        >
          <rect
            x="5"
            y="5"
            width="40"
            height="40"
            rx="10"
            fill="#3b82f6"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full border border-indigo-200 shadow-lg">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Excellence in Business Solutions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Your Strategic Partner in{" "}
                <span className="block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
                    Staffing, IT & FMCG
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Navarna delivers comprehensive solutions across staffing,
                IT/ITES, BPO services, manpower management, and FMCG. We
                prioritize innovation, quality, and client satisfaction to meet
                your diverse business needs effectively.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Industry-Leading Expertise",
                  "24/7 Customer Support",
                  "Global Reach & Presence",
                  "Proven Track Record",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center justify-center group">
                  Explore Our Services
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Contact Us Today
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Trusted by 500+ companies
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Visual */}
            <div className="relative">
              {/* Main Hero Image/Video */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-indigo-50 to-purple-50">
                  {!showVideo ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                        alt="Business professionals working"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/p8eqNrDibps?autoplay=1"
                      title="Company Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">95% Success</p>
                      <p className="text-sm text-gray-600">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">50K+ Staff</p>
                      <p className="text-sm text-gray-600">
                        Placed Successfully
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive business solutions designed to accelerate your
                growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 cursor-pointer transform hover:-translate-y-3"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
                      {card.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                    <div
                      className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${card.color} opacity-10 rounded-full transform translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
