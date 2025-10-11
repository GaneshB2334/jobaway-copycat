import { useState, useEffect } from "react";
import { ExternalLink, X, Star, ArrowRight, Briefcase } from "lucide-react";

const FloatingBitoCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling 100px and if not dismissed
      if (scrollY > 100 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleBitoJobsClick = () => {
    // Add your Bito Jobs URL here
    window.open("https://bitojobs.com", "_blank");
  };

  if (!isVisible || isDismissed) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      {isHovered && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" />
      )}

      <div
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main CTA Button */}
        <div
          className={`relative bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 rounded-2xl shadow-2xl border border-orange-300/20 overflow-hidden cursor-pointer transform transition-all duration-300 ${
            isHovered ? "scale-110 shadow-3xl" : "hover:scale-105"
          }`}
          onClick={handleBitoJobsClick}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 animate-pulse" />

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />

          <div className="relative p-4 text-white">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-yellow-300" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">Bito Jobs</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                <p className="text-sm text-orange-100 opacity-90">
                  Find your dream job today!
                </p>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Expanded content on hover */}
            {isHovered && (
              <div className="mt-4 pt-4 border-t border-white/20 animate-fade-in">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">50k+</p>
                    <p className="text-xs text-orange-200">Active Users</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">10k+</p>
                    <p className="text-xs text-orange-200">Job Listings</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 px-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Visit Portal
                </button>
              </div>
            )}
          </div>

          {/* Live indicator */}
          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
            <div className="absolute top-0 w-3 h-3 bg-green-400 rounded-full" />
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            🚀 India's Premier Job Portal
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .shadow-3xl {
          box-shadow:
            0 35px 60px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default FloatingBitoCTA;
