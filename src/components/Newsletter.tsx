import {
  ArrowRight,
  Mail,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Bell,
} from "lucide-react";
import { useState, useEffect } from "react";

const newsletterBenefits = [
  {
    icon: TrendingUp,
    title: "Career Insights",
    description: "Weekly industry trends and market analysis",
  },
  {
    icon: Users,
    title: "Success Stories",
    description: "Inspiring journeys from our community",
  },
  {
    icon: Star,
    title: "Expert Tips",
    description: "Professional advice from industry leaders",
  },
  {
    icon: Bell,
    title: "Job Alerts",
    description: "Personalized opportunities delivered daily",
  },
];

const stats = [
  { value: 25000, suffix: "+", label: "Subscribers" },
  { value: 150, suffix: "+", label: "Weekly Tips" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 4.8, suffix: "/5", label: "Rating" },
];

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("newsletter-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubscribed(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 5000);
  };

  if (isSubscribed) {
    return (
      <section
        id="newsletter-section"
        className="py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎉 Welcome to the Community!
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Thank you for subscribing! You'll receive your first newsletter
              with exclusive career tips and job opportunities within 24 hours.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 text-green-100">
                <Mail className="w-5 h-5" />
                <span className="font-medium">
                  Confirmation sent to {email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="newsletter-section"
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
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
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <p className="text-blue-200 font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="font-semibold text-sm uppercase tracking-wider text-blue-200">
                Newsletter
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get exclusive career insights, job opportunities, and industry
              trends delivered directly to your inbox. Join thousands of
              professionals advancing their careers with our expert guidance.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newsletterBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-200 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Subscription Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Mail className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold rounded-2xl px-8 py-4 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed group ${isLoading ? "animate-pulse" : ""}`}
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe to Newsletter</span>
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Weekly updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-blue-200 mb-4">Trusted by professionals at</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white font-semibold">Google</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white font-semibold">Microsoft</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white font-semibold">Amazon</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white font-semibold">Apple</span>
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
          animation: spin-slow 15s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
