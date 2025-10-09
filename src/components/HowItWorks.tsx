import { useState, useEffect } from "react";
import {
  UserPlus,
  Search,
  UserCheck,
  Building2,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  Award,
} from "lucide-react";

const talentSteps = [
  {
    number: "1",
    title: "Create Your Profile",
    description:
      "Sign up for free and build your professional profile with skills, experience, and preferences to get matched with perfect opportunities.",
    icon: UserPlus,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    features: ["Free Registration", "Profile Builder", "Skill Assessment"],
  },
  {
    number: "2",
    title: "Browse & Apply",
    description:
      "Explore thousands of job opportunities across industries. Apply with one click and track your application status in real-time.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    features: ["Smart Search", "One-Click Apply", "Real-time Tracking"],
  },
  {
    number: "3",
    title: "Get Hired & Start",
    description:
      "Connect with employers, complete interviews, and start your new role. We provide ongoing support throughout your journey.",
    icon: UserCheck,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    features: ["Interview Support", "Onboarding Help", "Career Growth"],
  },
];

const businessSteps = [
  {
    number: "1",
    title: "Post Your Requirements",
    description:
      "Create detailed job postings with requirements, budgets, and timelines. Our AI helps optimize your listings for maximum visibility.",
    icon: FileText,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    features: ["AI-Optimized Posts", "Budget Planning", "Timeline Management"],
  },
  {
    number: "2",
    title: "Review Candidates",
    description:
      "Access a curated pool of pre-screened candidates. Review profiles, portfolios, and ratings before making your selection.",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    features: ["Pre-screened Talent", "Portfolio Reviews", "Rating System"],
  },
  {
    number: "3",
    title: "Manage & Scale",
    description:
      "Onboard your selected candidates and manage your workforce through our comprehensive dashboard with analytics and reporting.",
    icon: Building2,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    features: ["Team Management", "Analytics Dashboard", "Performance Reports"],
  },
];

const processStats = [
  { icon: Clock, value: 24, suffix: "hrs", label: "Average Hire Time" },
  { icon: Target, value: 95, suffix: "%", label: "Match Accuracy" },
  { icon: Users, value: 50000, suffix: "+", label: "Active Users" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction" },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("talents");
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const [counters, setCounters] = useState(processStats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const currentSteps = activeTab === "talents" ? talentSteps : businessSteps;

  useEffect(() => {
    setVisibleSteps(new Array(currentSteps.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          currentSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
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

    const section = document.getElementById("steps-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [activeTab, currentSteps.length]);

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          processStats.forEach((stat, index) => {
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

    const statsSection = document.getElementById("process-stats");
    if (statsSection) statsObserver.observe(statsSection);

    return () => statsObserver.disconnect();
  }, [isStatsVisible]);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-blue-300/5 rounded-full blur-2xl"></div>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6">
            <Target className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How It
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Actually Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process connects talent with opportunities
            efficiently. Choose your path and see how simple it can be.
          </p>
        </div>

        {/* Process Stats */}
        <div
          id="process-stats"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {processStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
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

        <div className="max-w-6xl mx-auto">
          {/* Tab Selector */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
              <button
                onClick={() => setActiveTab("talents")}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "talents"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                For Job Seekers
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                For Employers
              </button>
            </div>
          </div>

          {/* Steps Section */}
          <div id="steps-section" className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-2 h-96 bg-gradient-to-b from-indigo-200 via-purple-200 to-blue-200 rounded-full opacity-50"></div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {currentSteps.map((step, index) => {
                const Icon = step.icon;
                const isVisible = visibleSteps[index];
                const isActive = activeStep === index;

                return (
                  <div
                    key={`${activeTab}-${step.number}`}
                    className={`group relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    } ${isActive ? "scale-105" : ""}`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                    }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-3 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>

                      {/* Step Number */}
                      <div
                        className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>

                      {/* Icon Container */}
                      <div
                        className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                        ></div>
                        <Icon className="w-8 h-8 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        className={`w-full bg-gradient-to-r ${step.color} hover:shadow-lg text-white font-semibold rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
                      >
                        Get Started
                      </button>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                      </div>

                      <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                        <div
                          className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${step.color} opacity-10 rounded-full transform translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-700`}
                        ></div>
                      </div>
                    </div>

                    {/* Connection Dots for Mobile */}
                    {index < currentSteps.length - 1 && (
                      <div className="md:hidden flex justify-center py-4">
                        <div className="w-2 h-8 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Join thousands of successful professionals and businesses who
                trust our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                  Watch Demo
                </button>
              </div>
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

export default HowItWorks;
