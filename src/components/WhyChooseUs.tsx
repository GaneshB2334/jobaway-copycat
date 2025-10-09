import {
  ArrowRight,
  Award,
  Shield,
  TrendingUp,
  Lightbulb,
  Users,
  Clock,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Tools & Technologies",
    description:
      "Leveraging advanced technologies including custom HRMS applications and mobile apps that minimize errors and streamline essential HR processes.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Comprehensive HR Solutions",
    description:
      "Beyond recruitment, we offer manpower leasing and complete workforce management with flexible, customized HR solutions across India.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description:
      "Our flexible and customized HR solutions cover every aspect of your workforce needs, making us a trusted partner for businesses nationwide.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Consistent growth and success stories with measurable results that drive business excellence and operational efficiency.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Clock,
    title: "24/7 Support System",
    description:
      "Round-the-clock support ensuring seamless operations and immediate assistance whenever you need it most.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Award-winning services recognized by industry leaders for excellence in innovation, quality, and client satisfaction.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
];

const WhyChooseUs = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false),
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate cards one by one
          features.forEach((_, index) => {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/5 to-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-16 right-16 opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-spin-slow"
        >
          <polygon points="50,10 90,80 10,80" fill="#6366f1" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-16 opacity-15">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="animate-float"
        >
          <circle cx="60" cy="60" r="50" fill="#8b5cf6" opacity="0.2" />
          <rect
            x="20"
            y="20"
            width="80"
            height="80"
            rx="20"
            fill="#3b82f6"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Makes Us
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that set Navarna apart in the
            industry and why thousands of businesses trust us as their strategic
            partner.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards[index];

            return (
              <div
                key={feature.title}
                className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`relative w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <Icon
                    className={`w-8 h-8 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA Button */}
                <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-all duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                  <div
                    className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full transform rotate-45 group-hover:scale-150 transition-transform duration-700`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
              Schedule Consultation
            </button>
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

export default WhyChooseUs;
