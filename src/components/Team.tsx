import { useState, useEffect } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Award,
  Users,
  Star,
  MapPin,
  Calendar,
  TrendingUp,
} from "lucide-react";

const team = [
  {
    name: "Pravin Kumar",
    role: "Chairman",
    image: "https://navarna.com/public/assetsfront/img/11.jpg",
    experience: "20+ Years",
    location: "New Delhi",
    specialization: "Strategic Leadership",
    achievements: "Led 500+ successful projects",
    linkedin: "#",
    twitter: "#",
    email: "pravin@navarna.com",
    phone: "+91-9876543210",
    bio: "Visionary leader with extensive experience in strategic planning and business development.",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Kamal Chib",
    role: "Board President",
    image: "https://navarna.com/public/assetsfront/img/22.jpg",
    experience: "18+ Years",
    location: "Mumbai",
    specialization: "Corporate Governance",
    achievements: "Scaled 200+ businesses",
    linkedin: "#",
    twitter: "#",
    email: "kamal@navarna.com",
    phone: "+91-9876543211",
    bio: "Expert in corporate governance and organizational excellence with proven track record.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    name: "Anil Pratham, Ex. DGP Gujarat",
    role: "Advisor to Board",
    image: "https://navarna.com/public/assetsfront/img/33.jpg",
    experience: "25+ Years",
    location: "Ahmedabad",
    specialization: "Security & Compliance",
    achievements: "40+ years in public service",
    linkedin: "#",
    twitter: "#",
    email: "anil@navarna.com",
    phone: "+91-9876543212",
    bio: "Distinguished public servant bringing security expertise and regulatory compliance knowledge.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Amresh Kumar Mishra",
    role: "Managing Director",
    image: "https://navarna.com/public/assetsfront/img/4.jpg",
    experience: "15+ Years",
    location: "Bangalore",
    specialization: "Operations Management",
    achievements: "Managed 1000+ workforce",
    linkedin: "#",
    twitter: "#",
    email: "amresh@navarna.com",
    phone: "+91-9876543213",
    bio: "Operations excellence leader with expertise in scaling businesses and managing large teams.",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "Himanshu Kaushik",
    role: "Chief Executive Officer (CEO)",
    image: "https://navarna.com/public/assetsfront/img/5.jpg",
    experience: "12+ Years",
    location: "Gurgaon",
    specialization: "Business Strategy",
    achievements: "Built 50+ strategic partnerships",
    linkedin: "#",
    twitter: "#",
    email: "himanshu@navarna.com",
    phone: "+91-9876543214",
    bio: "Dynamic CEO driving innovation and growth through strategic partnerships and market expansion.",
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    name: "Amit Kumar",
    role: "Alliance Director",
    image: "https://navarna.com/public/assetsfront/img/6.jpg",
    experience: "14+ Years",
    location: "Pune",
    specialization: "Strategic Alliances",
    achievements: "Forged 100+ partnerships",
    linkedin: "#",
    twitter: "#",
    email: "amit@navarna.com",
    phone: "+91-9876543215",
    bio: "Strategic alliance expert focused on building sustainable partnerships for business growth.",
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    name: "G.R. Pradhan",
    role: "Alliance Director",
    image: "https://navarna.com/public/assetsfront/img/7.jpg",
    experience: "16+ Years",
    location: "Chennai",
    specialization: "Market Development",
    achievements: "Expanded to 25+ cities",
    linkedin: "#",
    twitter: "#",
    email: "gr@navarna.com",
    phone: "+91-9876543216",
    bio: "Market development specialist with extensive experience in geographical expansion and growth.",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Ashutosh Mourya",
    role: "Alliance Director",
    image: "https://navarna.com/public/assetsfront/img/8.jpg",
    experience: "13+ Years",
    location: "Hyderabad",
    specialization: "Client Relations",
    achievements: "Maintained 98% client retention",
    linkedin: "#",
    twitter: "#",
    email: "ashutosh@navarna.com",
    phone: "+91-9876543217",
    bio: "Client relationship expert ensuring exceptional service delivery and long-term partnerships.",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
];

const teamStats = [
  { icon: Users, value: 8, suffix: "", label: "Leadership Team" },
  { icon: Calendar, value: 150, suffix: "+", label: "Combined Experience" },
  { icon: Award, value: 25, suffix: "+", label: "Industry Awards" },
  { icon: TrendingUp, value: 500, suffix: "+", label: "Success Stories" },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(team.length).fill(false),
  );
  const [counters, setCounters] = useState(teamStats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          team.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 },
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          teamStats.forEach((stat, index) => {
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

    const section = document.getElementById("team-section");
    const statsSection = document.getElementById("team-stats");

    if (section) observer.observe(section);
    if (statsSection) statsObserver.observe(statsSection);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, [isStatsVisible]);

  return (
    <section
      id="team-section"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden"
    >
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6">
            <Users className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Our
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Expert Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse leadership team brings together decades of experience,
            innovation, and expertise to drive your success across industries.
          </p>
        </div>

        {/* Team Stats */}
        <div
          id="team-stats"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {teamStats.map((stat, index) => {
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {team.map((member, index) => {
            const isVisible = visibleCards[index];
            const isSelected = selectedMember === index;

            return (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isSelected ? "scale-105 z-10" : "hover:scale-105"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => setSelectedMember(isSelected ? null : index)}
              >
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 overflow-hidden transform hover:-translate-y-3">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-sm font-bold text-indigo-600">
                        {member.experience}
                      </span>
                    </div>

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200">
                        <Linkedin className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200">
                        <Mail className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200">
                        <Phone className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${member.gradient}`}
                      ></div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                      >
                        {member.role}
                      </p>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>

                      {/* Specialization */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-xs font-medium text-gray-600 mb-1">
                          Specialization
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {member.specialization}
                        </p>
                      </div>

                      {/* Achievement */}
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">
                          {member.achievements}
                        </span>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                      <div
                        className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${member.gradient} opacity-10 rounded-full transform translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-700`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Extended Info Card - Shows when selected */}
                {isSelected && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-20 transform animate-slide-down">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        About {member.name.split(" ")[0]}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-indigo-500" />
                        <span className="text-gray-600">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{member.phone}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(null);
                      }}
                      className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg px-4 py-2 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              We're always looking for talented individuals who share our vision
              and passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Careers
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                Contact Us
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
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Team;
