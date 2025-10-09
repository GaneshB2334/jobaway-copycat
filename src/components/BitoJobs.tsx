import {
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Award,
  Clock,
  Heart,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const bitoFeatures = [
  {
    icon: Users,
    title: "50k+ Active Users",
    description: "Growing community of job seekers and employers",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Briefcase,
    title: "10k+ Job Listings",
    description: "New opportunities added daily across industries",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "High placement rate for serious job seekers",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    title: "4.8/5 Rating",
    description: "Top-rated by users and industry professionals",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
];

const stats = [
  { number: 50000, suffix: "+", label: "Active Job Seekers", icon: Users },
  { number: 10000, suffix: "+", label: "Job Opportunities", icon: Briefcase },
  { number: 500, suffix: "+", label: "Partner Companies", icon: Globe },
  { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp },
];

const platformFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Seamless experience across all devices",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "All profiles and companies are thoroughly verified",
  },
  {
    icon: Zap,
    title: "Instant Matching",
    description: "AI-powered job matching in real-time",
  },
  {
    icon: Clock,
    title: "Quick Apply",
    description: "Apply to multiple jobs with just one click",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    position: "Software Engineer",
    company: "Tech Innovators",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
    quote:
      "Bito Jobs helped me find my dream job in just 2 weeks! The platform is user-friendly and the job matches were perfect.",
    rating: 5,
    timeframe: "Found job in 2 weeks",
  },
  {
    name: "Rajesh Kumar",
    position: "Marketing Manager",
    company: "Brand Solutions Ltd",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote:
      "The quality of candidates we found through Bito Jobs is exceptional. It's now our go-to platform for hiring.",
    rating: 5,
    timeframe: "Hired 15+ candidates",
  },
  {
    name: "Anitha Menon",
    position: "Data Scientist",
    company: "Analytics Pro",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote:
      "Amazing platform! Got multiple interview calls within days of uploading my profile. Highly recommended!",
    rating: 5,
    timeframe: "Multiple offers received",
  },
];

const BitoJobs = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(
    new Array(platformFeatures.length).fill(false),
  );

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 80;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = stat.number;
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
            }, 25);
          });

          // Animate platform features
          platformFeatures.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("bito-jobs-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="bito-jobs-section"
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 opacity-30">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="animate-spin-slow"
        >
          <polygon points="40,5 75,65 5,65" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
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
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Prime Product
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Bito Jobs
          </h2>
          <p className="text-3xl font-light mb-6 text-blue-100">
            India's Fastest Growing Job Portal
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-8 text-gray-300 leading-relaxed">
            Discover thousands of opportunities, connect with top employers, and
            experience seamless job search with Bito Jobs—Navarna's flagship
            portal revolutionizing the Indian job market.
          </p>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-green-400 font-bold">●</span>{" "}
              <span className="ml-2">Live Platform</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-blue-400 font-bold">●</span>{" "}
              <span className="ml-2">24/7 Support</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-purple-400 font-bold">●</span>{" "}
              <span className="ml-2">Free to Use</span>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-3">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-gray-300 font-medium text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto mb-24">
          {/* Left Side - Enhanced Video/Demo */}
          <div className="relative group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="aspect-video">
                {!showVideo ? (
                  <div className="relative w-full h-full">
                    <img
                      src="/Black White and Orange Modern Pitch Deck Presentation.png"
                      alt="Bito Jobs Portal Screenshot"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                    >
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover/play:bg-white/30 group-hover/play:scale-125 transition-all duration-500 shadow-2xl">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                    </button>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Platform Demo</h3>
                      <p className="text-white/90">
                        See how Bito Jobs transforms careers
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p8eqNrDibps?autoplay=1"
                    title="Bito Jobs Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Verified Jobs</p>
                    <p className="text-sm text-gray-600">100% Authentic</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">User Loved</p>
                    <p className="text-sm text-gray-600">4.8★ Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Features */}
          <div className="space-y-10">
            {/* Main Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {bitoFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                        ></div>
                        <Icon className="w-6 h-6 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-blue-200 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full px-12 py-5 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group text-lg">
                <Globe className="mr-3 w-6 h-6" />
                Visit Bito Jobs
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-full px-12 py-5 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group text-lg">
                <ExternalLink className="mr-3 w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Platform Features Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Why Choose Bito Jobs?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of job searching with our advanced features
              and user-centric design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isVisible = visibleFeatures[index];

              return (
                <div
                  key={feature.title}
                  className={`group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 transform hover:-translate-y-3 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Success Stories</h3>
            <p className="text-xl text-gray-300">
              Hear from our satisfied users who found their dream opportunities
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-2xl text-gray-200 italic mb-8 leading-relaxed max-w-3xl mx-auto">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center gap-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                        />
                        <div className="text-left">
                          <p className="font-bold text-white text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-blue-300 font-medium">
                            {testimonial.position}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {testimonial.company}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Award className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm font-medium">
                              {testimonial.timeframe}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-300" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default BitoJobs;
