import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Target,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import Team from "@/components/Team";
// import { Button } from "react-day-picker";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Continuously pushing boundaries to deliver cutting-edge solutions",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering quality that exceeds expectations",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Satisfaction",
      description: "Your success is our priority, every step of the way",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "A trusted partner you can count on for consistent results",
    },
  ];

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "FMCG Solutions",
      description:
        "Swift market presence and distribution excellence for your products",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "IT Services",
      description:
        "Tailored technology solutions matching your unique business demands",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staffing Solutions",
      description: "Strategic talent alignment with your organizational goals",
    },
  ];

  const features = [
    "Simple, visual dashboard with on-point reports",
    "Build custom reports that make sense for your business",
    "Navigate through tonnes of data with custom analytics",
    "Seamless integration with existing systems",
    "Real-time data insights and analytics",
    "Dedicated support team available 24/7",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 font-semibold mb-4 text-lg">
              What We Do
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in FMCG, IT and Staffing Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Navarna is a dynamic and versatile force committed to excellence
              in Fast-Moving Consumer Goods, cutting-edge Information Technology
              services, and comprehensive Staffing Solutions.
            </p>
          </div>
        </div>

        {/* Wave */}
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
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Excellence in Every Solution
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As your strategic partner, we prioritize innovation,
                    quality, and client satisfaction to meet your diverse
                    business needs effectively.
                  </p>
                  <p>
                    Explore our agility in the FMCG sector, ensuring swift
                    market presence for your products. Our Information
                    Technology services stand at the forefront of innovation,
                    providing tailored solutions to match your unique business
                    demands.
                  </p>
                  <p>
                    Going beyond conventional approaches, our Staffing Solutions
                    strategically align talent with your organizational goals,
                    ensuring the right people contribute to your success.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="rounded-xl w-full h-auto shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                    alt="Modern office workspace"
                    className="rounded-xl w-full h-auto shadow-lg mt-6"
                  />
                  {/* Extra SVG Shape */}
                  <div className="absolute top-4 right-4 z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      className="opacity-30"
                    >
                      <circle cx="30" cy="30" r="28" fill="#6366f1" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors relative">
                  {value.icon}
                  {/* Decorative SVG shape */}
                  <span className="absolute -top-4 -right-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="opacity-20"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="6"
                        fill="#f59e42"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Specialized Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A unique blend of strategy, technology, design capability and
                quality implementation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our specialized services and unique blend of strategy,
                technology, design capability and quality implementation has
                helped us gain our clients' confidence and excel in this domain
                of portal development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Navarna, we thrive in dynamic business landscapes, adapting
                to change and consistently delivering solutions that surpass
                expectations. Our team of skilled professionals is not only
                experts in their fields but also dedicated to understanding your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl relative">
                  <div className="relative">
                    <svg viewBox="0 0 400 300" className="w-full h-auto">
                      {/* Magnifying Glass */}
                      <circle
                        cx="200"
                        cy="120"
                        r="60"
                        fill="#3B82F6"
                        opacity="0.1"
                      />
                      <circle
                        cx="200"
                        cy="120"
                        r="50"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="6"
                      />
                      <line
                        x1="235"
                        y1="155"
                        x2="270"
                        y2="190"
                        stroke="#F97316"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />

                      {/* Business person */}
                      <ellipse
                        cx="80"
                        cy="100"
                        rx="15"
                        ry="20"
                        fill="#1E3A8A"
                      />
                      <rect
                        x="65"
                        y="120"
                        width="30"
                        height="40"
                        rx="5"
                        fill="#1E3A8A"
                      />
                      <line
                        x1="80"
                        y1="140"
                        x2="130"
                        y2="120"
                        stroke="#1E3A8A"
                        strokeWidth="3"
                      />

                      {/* Small people figures */}
                      {[0, 1, 2, 3, 4, 5].map((row) =>
                        [0, 1, 2, 3, 4].map((col) => (
                          <g
                            key={`${row}-${col}`}
                            transform={`translate(${180 + col * 25}, ${200 + row * 20})`}
                          >
                            <circle cx="0" cy="0" r="3" fill="#64748B" />
                            <rect
                              x="-2"
                              y="4"
                              width="4"
                              height="8"
                              rx="1"
                              fill="#64748B"
                            />
                          </g>
                        )),
                      )}
                    </svg>
                    {/* Extra Unsplash image */}
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                      alt="Business teamwork"
                      className="rounded-xl w-32 h-24 object-cover absolute top-4 left-4 shadow-lg"
                    />
                  </div>
                  {/* Decorative SVG shape */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="opacity-20"
                    >
                      <ellipse cx="24" cy="24" rx="20" ry="12" fill="#3b82f6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <p className="text-orange-500 font-semibold mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  We're A Reliable And Cost Efficient Recruitment Agency
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Together, as Navarna Bharat, we seamlessly integrate the
                  strengths and capabilities of both entities to offer a
                  comprehensive suite of services and solutions.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you are seeking top-notch staffing solutions or
                  looking to explore the vast potential of the Indian FMCG
                  market, Navarna Bharat is your strategic partner for success.
                </p>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Commitment to Your Success
            </h2>
            <p className="text-xl text-white/90 mb-8 text-center leading-relaxed">
              Our commitment to excellence, innovation, and client satisfaction
              is at the core of everything we do. Join us on this exciting
              journey as we redefine possibilities and contribute to the growth
              and success of businesses in India and beyond.
            </p>
            <p className="text-xl text-white/90 mb-8 text-center leading-relaxed">
              Choosing Navarna means choosing a reliable partner invested in
              your success. Join us on a journey where innovation meets quality,
              and client satisfaction is not just a goal but a guarantee.
            </p>
            <p className="text-2xl font-bold text-center">
              Let Navarna be the driving force behind your business growth and
              prosperity. Welcome to a world where excellence is not just a
              commitment but a way of doing business.
            </p>
          </div>
        </div>
      </section>
      <Team />

      <Footer />
    </div>
  );
};

export default About;
