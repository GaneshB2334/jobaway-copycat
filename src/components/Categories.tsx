import { ArrowRight, ExternalLink, Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "FMCG Products",
    description:
      "Comprehensive range of fast-moving consumer goods that meet the highest industry standards with swift market presence and quality assurance.",
    image:
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&h=400&fit=crop",
    alt: "Fast-Moving Consumer Goods",
    stats: { projects: "150+", clients: "200+", growth: "85%" },
    features: ["Quality Assurance", "Swift Delivery", "Market Leadership"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Staffing Solutions",
    description:
      "Tailored staffing solutions that unlock workforce potential, aligning top talent with organizational goals for sustainable business growth.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    alt: "Staffing Solutions",
    stats: { projects: "500+", clients: "300+", growth: "92%" },
    features: ["Talent Matching", "HR Consulting", "Workforce Management"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "IT Services",
    description:
      "Cutting-edge technological innovation with robust cybersecurity measures, safeguarding sensitive information while driving digital transformation.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "IT Services",
    stats: { projects: "200+", clients: "150+", growth: "88%" },
    features: ["Digital Innovation", "Cybersecurity", "Tech Solutions"],
    gradient: "from-purple-500 to-pink-500",
  },
];

const Categories = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(categories.length).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          categories.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 300);
          });
        }
      },
      { threshold: 0.2 },
    );

    const section = document.getElementById("categories-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="categories-section"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-indigo-300/15 to-blue-300/15 rounded-full blur-2xl animate-bounce slow"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 opacity-30">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="animate-spin-slow"
        >
          <polygon points="40,5 75,65 5,65" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-float"
        >
          <circle cx="50" cy="50" r="45" fill="#8b5cf6" opacity="0.4" />
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="15"
            fill="#3b82f6"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-indigo-700 rounded-full px-6 py-3 mb-6 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Our
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your business growth
            and drive innovation across multiple industries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const isVisible = visibleCards[index];
            const isActive = activeCard === index;

            return (
              <div
                key={category.title}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-white transform hover:-translate-y-3 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isActive ? "scale-105" : "hover:scale-105"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Stats Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-gray-800">
                        {category.stats.growth} Success Rate
                      </span>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                    <span className="text-white font-semibold text-sm">
                      {category.stats.projects} Projects
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-transparent"></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-100 hover:bg-indigo-100 transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <span>{category.stats.clients} Clients</span>
                      <span>•</span>
                      <span>{category.stats.projects} Projects</span>
                      <span>•</span>
                      <span>{category.stats.growth} Growth</span>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-6 py-4 inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl">
                      <span>Explore Service</span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                    </button>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
                    <div
                      className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${category.gradient} opacity-10 rounded-full transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our services can help you achieve your goals and
              drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-8 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-8 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                View All Services
              </button>
            </div>
          </div>
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
            transform: translateY(-15px) rotate(180deg);
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

export default Categories;
