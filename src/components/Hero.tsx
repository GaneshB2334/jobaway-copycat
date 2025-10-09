import { ArrowRight } from "lucide-react";

const floatingProfiles = [
  {
    name: "Staffing",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#2563eb",
    position: "top-20 left-[10%]",
  },
  {
    name: "IT/ITES",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#6366f1",
    position: "top-[40%] left-[15%]",
  },
  {
    name: "BPO Jobs",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#f59e42",
    position: "bottom-40 left-[12%]",
  },
  {
    name: "Manpower",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#10b981",
    position: "top-32 right-[10%]",
  },
  {
    name: "FMCG",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#ef4444",
    position: "top-[45%] right-[8%]",
  },
  {
    name: "Staffing",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&h=256&facepad=2",
    color: "#fbbf24",
    position: "bottom-32 right-[12%]",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Floating Profile Avatars */}
      {floatingProfiles.map((profile, index) => (
        <div
          key={profile.name + index}
          className={`absolute ${profile.position} hidden md:block`}
          style={{
            animation:
              index % 2 === 0
                ? "float 6s ease-in-out infinite"
                : "float 6s ease-in-out infinite 3s",
          }}
        >
          <div className="relative">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <span
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white whitespace-nowrap shadow-lg"
              style={{
                backgroundColor: profile.color,
              }}
            >
              {profile.name}
            </span>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence in Staffing, IT/ITES, BPO, Manpower & FMCG
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Navarna is your strategic partner for staffing, IT/ITES, BPO jobs,
            manpower, and FMCG solutions. We prioritize innovation, quality, and
            client satisfaction to meet your diverse business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center text-indigo-700">
              Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-full px-8 py-3 text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Contact Us
            </button>
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

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
