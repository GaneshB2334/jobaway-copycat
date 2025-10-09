import {
  Check,
  Users,
  Briefcase,
  Star,
  Building2,
  Play,
  Award,
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 80,
    suffix: "k",
    label: "Freelance Workers",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    value: 25,
    suffix: "%",
    label: "Jobs Fulfillment Rate",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    value: 12,
    suffix: "k+",
    label: "Jobs Filled",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    value: 598,
    suffix: "+",
    label: "Satisfied Businesses",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

const industries = [
  { name: "FMCG Products", icon: "🛒" },
  { name: "IT Services", icon: "💻" },
  { name: "Staffing Solutions", icon: "👥" },
  { name: "Technology Innovation", icon: "🚀" },
  { name: "Business Consulting", icon: "💼" },
  { name: "Digital Transformation", icon: "⚡" },
  { name: "Cloud Solutions", icon: "☁️" },
  { name: "Data Analytics", icon: "📊" },
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards for excellence in service delivery",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "95% accuracy in talent-job matching algorithms",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 25+ countries worldwide",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your needs",
    color: "from-purple-500 to-pink-500",
  },
];

const keyFeatures = [
  {
    icon: Lightbulb,
    text: "Swift market presence for FMCG products with highest industry standards and quality assurance",
  },
  {
    icon: Shield,
    text: "Tailored staffing solutions aligning top talent with organizational goals and objectives",
  },
  {
    icon: TrendingUp,
    text: "Cutting-edge technology solutions driving digital transformation and business growth",
  },
  {
    icon: Users,
    text: "Comprehensive workforce management with end-to-end HR solutions and support",
  },
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(achievements.length).fill(false),
  );
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate stats counters
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

          // Animate achievement cards
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
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
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden"
      id="about-section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-blue-300/5 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-spin-slow"
        >
          <polygon points="50,10 90,80 10,80" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 opacity-15">
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
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6">
            <Building2 className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              About Navarna Bharat
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Driving Excellence Through
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Innovation & Quality
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Navarna is a dynamic and versatile force committed to excellence in
            FMCG, IT services, and Staffing Solutions. As your strategic
            partner, we prioritize innovation, quality, and client satisfaction
            to meet your diverse business needs effectively.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Left - Enhanced Video/Image */}
          <div className="relative group">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-indigo-50 to-purple-50">
                {!showVideo ? (
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                      alt="Navarna team collaboration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover/play:bg-white/30 group-hover/play:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </button>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                      <p className="text-white/90">
                        Discover how we're transforming businesses
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p8eqNrDibps?autoplay=1"
                    title="About Us Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">10+ Years</p>
                    <p className="text-sm text-gray-600">Industry Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div className="space-y-8">
            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Sets Us Apart
              </h3>
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div
                      className={`w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        activeFeature === index ? "bg-indigo-600" : ""
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          activeFeature === index
                            ? "text-white"
                            : "text-indigo-700"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium leading-relaxed group-hover:text-indigo-700 transition-colors duration-300">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                Learn More About Us
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                Download Company Profile
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers reflect our commitment to excellence and the trust
              our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative p-6 text-center">
                    <div
                      className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                      ></div>
                      <Icon className="w-8 h-8 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {counters[index]}
                      {stat.suffix}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                    <div
                      className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${stat.color} opacity-10 rounded-full transform translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Cards */}

        {/* Enhanced Scrolling Industries */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across diverse industries, delivering
              specialized solutions for each sector.
            </p>
          </div>

          <div className="overflow-hidden py-8 relative rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-industry-scroll">
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border-2 border-indigo-200 hover:border-indigo-300 rounded-2xl px-6 py-4 font-semibold whitespace-nowrap text-indigo-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105 flex items-center gap-3"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
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
        @keyframes industry-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-industry-scroll {
          animation: industry-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
