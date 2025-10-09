import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const clientLogos = [
  {
    src: "/client/HomeLogo1.jpg",
    name: "TechCorp Solutions",
    industry: "Technology",
    partnership: "5+ years",
  },
  {
    src: "/client/HomeLogo2.jpg",
    name: "Global Industries",
    industry: "Manufacturing",
    partnership: "3+ years",
  },
  {
    src: "/client/HomeLogo3.jpg",
    name: "InnovatePharma",
    industry: "Healthcare",
    partnership: "7+ years",
  },
  {
    src: "/client/HomeLogo4.jpg",
    name: "FinanceFirst",
    industry: "Financial Services",
    partnership: "4+ years",
  },
  {
    src: "/client/HomeLogo5.jpg",
    name: "RetailMax",
    industry: "Retail",
    partnership: "6+ years",
  },
  {
    src: "/client/HomeLogo6.jpg",
    name: "EduTech Pro",
    industry: "Education",
    partnership: "2+ years",
  },
  {
    src: "/client/HomeLogo7.jpg",
    name: "LogisticsPro",
    industry: "Logistics",
    partnership: "8+ years",
  },
  {
    src: "/client/HomeLogo8.jpg",
    name: "ConsultCorp",
    industry: "Consulting",
    partnership: "3+ years",
  },
  {
    src: "/client/HomeLogo9.jpg",
    name: "MediaVision",
    industry: "Media & Entertainment",
    partnership: "5+ years",
  },
  {
    src: "/client/HomeLogo10.jpg",
    name: "AutoTech",
    industry: "Automotive",
    partnership: "4+ years",
  },
  {
    src: "/client/HomeLogo11.jpg",
    name: "EnergyFlow",
    industry: "Energy",
    partnership: "6+ years",
  },
  {
    src: "/client/HomeLogo12.jpg",
    name: "AgriTech Solutions",
    industry: "Agriculture",
    partnership: "3+ years",
  },
];

const clientStats = [
  { icon: Users, value: 500, suffix: "+", label: "Trusted Partners" },
  { icon: Award, value: 95, suffix: "%", label: "Client Retention" },
  { icon: TrendingUp, value: 150, suffix: "+", label: "Industries Served" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Client Rating" },
];

const testimonials = [
  {
    quote:
      "Navarna has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    rating: 5,
  },
  {
    quote:
      "The staffing solutions provided by Navarna have helped us scale our operations efficiently and effectively.",
    author: "Michael Chen",
    position: "HR Director, Global Industries",
    rating: 5,
  },
  {
    quote:
      "Outstanding service quality and professional approach. Navarna truly understands our business needs.",
    author: "Emily Rodriguez",
    position: "CEO, InnovatePharma",
    rating: 5,
  },
];

export default function ClientsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    speed: 10,
  });
  const [testimonialRef, testimonialApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [counters, setCounters] = useState(clientStats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [activeClient, setActiveClient] = useState<number | null>(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const onMouseEnter = useCallback(() => setIsPlaying(false), []);
  const onMouseLeave = useCallback(() => setIsPlaying(true), []);

  useEffect(() => {
    if (!emblaApi) return;

    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => emblaApi.scrollNext(), 3000);
    }
    return () => clearInterval(timer);
  }, [emblaApi, isPlaying]);

  useEffect(() => {
    if (!testimonialApi) return;

    let timer: NodeJS.Timeout;
    timer = setInterval(() => testimonialApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [testimonialApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          clientStats.forEach((stat, index) => {
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
      { threshold: 0.5 },
    );

    const section = document.getElementById("clients-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isStatsVisible]);

  return (
    <section
      id="clients-section"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-16 right-16 opacity-20">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="animate-spin-slow"
        >
          <polygon points="40,5 75,65 5,65" fill="#6366f1" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6">
            <Award className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful companies that trust Navarna for their
            business solutions and growth initiatives.
          </p>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {clientStats.map((stat, index) => {
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

        {/* Client Logos Carousel */}
        <div className="relative mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Valued Partners
            </h3>
          </div>

          <div className="relative">
            <div
              className="embla overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg"
              ref={emblaRef}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="embla__container flex">
                {clientLogos.map((client, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/5 p-4"
                  >
                    <div
                      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 cursor-pointer transform hover:-translate-y-2"
                      onMouseEnter={() => setActiveClient(index)}
                      onMouseLeave={() => setActiveClient(null)}
                    >
                      <div className="aspect-square flex items-center justify-center mb-4">
                        <img
                          src={client.src}
                          alt={client.name}
                          className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Client Info - Shows on Hover */}
                      <div
                        className={`absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-200 shadow-lg transform transition-all duration-300 ${
                          activeClient === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          {client.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1">
                          {client.industry}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-indigo-600 font-medium">
                            {client.partnership}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-gray-600">5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-indigo-50 hover:border-indigo-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-indigo-50 hover:border-indigo-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600">
              Hear from the industry leaders who trust us
            </p>
          </div>

          <div className="embla overflow-hidden" ref={testimonialRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="embla__slide flex-shrink-0 basis-full"
                >
                  <div className="text-center px-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-indigo-600 font-medium">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Our Partners
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 hover:text-indigo-600 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200">
              View Case Studies
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
        }
      `}</style>
    </section>
  );
}
