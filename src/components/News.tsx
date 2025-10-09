import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ExternalLink,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Star,
} from "lucide-react";

const news = [
  {
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    date: "July 10, 2024",
    title: "Revolutionizing Resume Writing: AI-Powered Tools for Job Seekers",
    excerpt:
      "Discover how artificial intelligence is transforming the way professionals craft compelling resumes and cover letters that stand out to employers.",
    author: "Sarah Johnson",
    readTime: "5 min read",
    views: 2847,
    likes: 156,
    comments: 23,
    category: "Career Tips",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    date: "July 8, 2024",
    title: "Internship Success Stories: From Campus to Corporate Excellence",
    excerpt:
      "Explore inspiring journeys of our graduates who transformed internship opportunities into thriving career paths across diverse industries.",
    author: "Michael Chen",
    readTime: "7 min read",
    views: 1923,
    likes: 98,
    comments: 17,
    category: "Success Stories",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    date: "July 5, 2024",
    title: "SEO Strategies for Job Search: Optimizing Your Digital Presence",
    excerpt:
      "Learn essential SEO techniques to improve your professional online visibility and attract recruiters through strategic keyword optimization.",
    author: "Emily Rodriguez",
    readTime: "6 min read",
    views: 3156,
    likes: 203,
    comments: 41,
    category: "Digital Strategy",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    date: "July 2, 2024",
    title: "Remote Work Revolution: Adapting to the New Professional Landscape",
    excerpt:
      "Navigate the evolving remote work culture with expert insights on productivity, communication, and building meaningful professional relationships.",
    author: "David Kim",
    readTime: "8 min read",
    views: 4289,
    likes: 278,
    comments: 62,
    category: "Future of Work",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    date: "June 28, 2024",
    title: "Skills Development Roadmap: Future-Proofing Your Career",
    excerpt:
      "Identify emerging industry skills and create a comprehensive development plan to stay competitive in the rapidly evolving job market.",
    author: "Lisa Park",
    readTime: "9 min read",
    views: 2674,
    likes: 189,
    comments: 35,
    category: "Skill Development",
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    date: "June 25, 2024",
    title:
      "Networking in the Digital Age: Building Professional Connections Online",
    excerpt:
      "Master the art of digital networking with proven strategies for building authentic professional relationships through social platforms and virtual events.",
    author: "Alex Thompson",
    readTime: "4 min read",
    views: 1845,
    likes: 127,
    comments: 19,
    category: "Networking",
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
];

const newsStats = [
  { icon: TrendingUp, value: 50000, suffix: "+", label: "Monthly Readers" },
  { icon: Star, value: 150, suffix: "+", label: "Published Articles" },
  { icon: User, value: 25, suffix: "+", label: "Expert Contributors" },
  { icon: Eye, value: 500000, suffix: "+", label: "Total Views" },
];

const categories = [
  "All",
  "Career Tips",
  "Success Stories",
  "Digital Strategy",
  "Future of Work",
  "Skill Development",
  "Networking",
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(news.length).fill(false),
  );
  const [counters, setCounters] = useState(newsStats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((article) => article.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          filteredNews.forEach((_, index) => {
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
          newsStats.forEach((stat, index) => {
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

    const section = document.getElementById("news-section");
    const statsSection = document.getElementById("news-stats");

    if (section) observer.observe(section);
    if (statsSection) statsObserver.observe(statsSection);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, [filteredNews.length, isStatsVisible]);

  // Reset visible cards when category changes
  useEffect(() => {
    setVisibleCards(new Array(filteredNews.length).fill(false));
  }, [selectedCategory, filteredNews.length]);

  return (
    <section
      id="news-section"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100 relative overflow-hidden"
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
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Media Center
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest News &
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, success stories, and expert
            insights from the world of careers and professional development.
          </p>
        </div>

        {/* News Stats */}
        <div
          id="news-stats"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {newsStats.map((stat, index) => {
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white/70 backdrop-blur-sm text-gray-700 hover:text-indigo-600 hover:bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-indigo-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredNews.map((article, index) => {
            const isVisible = visibleCards[index];
            const isActive = activeArticle === index;

            return (
              <article
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isActive ? "scale-105 z-10" : "hover:scale-105"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveArticle(index)}
                onMouseLeave={() => setActiveArticle(null)}
              >
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 overflow-hidden transform hover:-translate-y-3">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div
                      className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 ${article.bgColor}`}
                    >
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent`}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Social Stats - Appear on Hover */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white">
                          {article.views}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                        <Heart className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white">
                          {article.likes}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${article.gradient}`}
                      ></div>
                    </div>

                    <div className="relative z-10">
                      {/* Date & Author */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Author & Stats */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {article.author}
                            </p>
                            <p className="text-sm text-gray-500">Author</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{article.comments}</span>
                          </div>
                          <button className="hover:text-indigo-600 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-6 py-4 inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl">
                        <span>Read Full Article</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                      </button>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                      <div
                        className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${article.gradient} opacity-10 rounded-full transform translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-700`}
                      ></div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Subscribe to our newsletter and never miss important career tips,
              industry trends, and success stories that can transform your
              professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                Subscribe Newsletter
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                View All Articles
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default News;
