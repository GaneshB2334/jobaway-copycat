import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 80, suffix: "k", label: "Freelance Workers" },
  { value: 25, suffix: "%", label: "Jobs Fulfillment Rate" },
  { value: 12, suffix: "k+", label: "Jobs Filled" },
  { value: 598, suffix: "+", label: "Satisfied Businesses" },
];

const industries = [
  "FMCG Products", "IT Services", "Staffing Solutions", "Technology Innovation", "Business Consulting",
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>About Navarna Bharat</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Focus on innovation, quality, and client satisfaction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Navarna is a dynamic and versatile force committed to excellence in Fast-Moving Consumer Goods (FMCG), cutting-edge Information Technology (IT) services, and comprehensive Staffing Solutions. As your strategic partner, we prioritize innovation, quality, and client satisfaction to meet your diverse business needs effectively.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Explore our agility in the FMCG sector, ensuring swift market presence for your products. Our Information Technology services stand at the forefront of innovation, providing tailored solutions to match your unique business demands. Going beyond conventional approaches, our Staffing Solutions strategically align talent with your organizational goals, ensuring the right people contribute to your success.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Navarna, we thrive in dynamic business landscapes, adapting to change and consistently delivering solutions that surpass expectations. Our team of skilled professionals is not only experts in their fields but also dedicated to understanding your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
                alt="About Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <div 
                    className="w-0 h-0 ml-1"
                    style={{
                      borderTop: '8px solid transparent',
                      borderLeft: '12px solid #2d1bb5',
                      borderBottom: '8px solid transparent'
                    }}
                  />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Watch Video</p>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6">
              We provide comprehensive solutions across FMCG, IT Services, and Staffing. Our team brings expertise and dedication to help your business thrive in dynamic markets.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#2d1bb5' }} />
                <span className="text-gray-900">Swift market presence for FMCG products with highest industry standards</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#2d1bb5' }} />
                <span className="text-gray-900">Tailored staffing solutions aligning talent with organizational goals</span>
              </li>
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2d1bb5' }}>
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Industries */}
        <div className="overflow-hidden">
          <div className="flex gap-8" style={{ animation: 'scroll 30s linear infinite' }}>
            {[...industries, ...industries, ...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 border-2 rounded-full font-medium whitespace-nowrap"
                style={{ borderColor: '#2d1bb5', color: '#2d1bb5' }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default About;