import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Target, Award, Users, TrendingUp, CheckCircle, 
  Zap, Shield, Globe, Building2, Briefcase, HeartHandshake,
  Eye, Crosshair, Factory, Code, UsersRound
} from "lucide-react";
import Team from "@/components/Team";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const AnimateOnScroll = ({ children, variants = fadeInUp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

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
      
      {/* Hero Section - Navarna Colors */}
      <section className="relative bg-gradient-to-br from-[#132160] via-[#1a2d7a] to-[#132160] overflow-hidden min-h-[500px]">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orange Geometric Shape - Top Right */}
          <motion.div 
            className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-[#e3702e] via-[#f58642] to-[#ff9c5a]"
            style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)" }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
                                 linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </motion.div>

          {/* White/Cream Geometric Shape */}
          <motion.div 
            className="absolute top-0 right-[25%] w-[35%] h-full bg-gradient-to-br from-white via-gray-50 to-gray-100"
            style={{ clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)" }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Dark Navy Overlay Shape - Left Side */}
          <div 
            className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-[#132160] via-[#132160]/90 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24 min-h-[500px]">
            {/* Left Side - Text Content */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                About Us
              </motion.h1>
              
              <motion.div
                className="flex items-center gap-3 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[#e3702e] hover:underline cursor-pointer font-semibold transition-colors">
                  Home
                </span>
                <span className="text-white text-2xl">»</span>
                <span className="text-white font-medium">About Us</span>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative flex items-center justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-lg">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=700&fit=crop" 
                  alt="Construction equipment" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main About Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 text-[#e3702e] mb-4">
                  <div className="h-px w-16 bg-[#e3702e]"></div>
                  <span className="text-sm font-bold tracking-wider uppercase">What We Do</span>
                  <div className="h-px w-16 bg-[#e3702e]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-6">
                  Your Trusted Partner in FMCG, IT and Staffing Solutions
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <AnimateOnScroll variants={fadeInLeft}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-[6px] border-[#e3702e] rounded-lg"></div>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                    alt="Team collaboration" 
                    className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variants={fadeInRight}>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Navarna is a dynamic and versatile force committed to excellence in Fast-Moving Consumer Goods (FMCG), cutting-edge Information Technology (IT) services, and comprehensive Staffing Solutions. As your strategic partner, we prioritize innovation, quality, and client satisfaction to meet your diverse business needs effectively.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Explore our agility in the FMCG sector, ensuring swift market presence for your products. Our Information Technology services stand at the forefront of innovation, providing tailored solutions to match your unique business demands.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Going beyond conventional approaches, our Staffing Solutions strategically align talent with your organizational goals, ensuring the right people contribute to your success.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section with Cards */}
      <section className="relative py-20 bg-gradient-to-br from-[#132160] to-[#0f1a4a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Image with Orange Border */}
            <AnimateOnScroll variants={fadeInLeft}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-[6px] border-[#e3702e] rounded-lg"></div>
                <motion.img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop" 
                  alt="Professional woman" 
                  className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </AnimateOnScroll>

            {/* Right Side - Content */}
            <AnimateOnScroll variants={fadeInRight}>
              <div className="space-y-6">
                <motion.p className="text-white text-lg leading-relaxed mb-8">
                  At Navarna, we thrive in dynamic business landscapes, adapting to change and consistently delivering solutions that surpass expectations. Our team of skilled professionals is not only experts in their fields but also dedicated to understanding your specific needs.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Factory className="w-12 h-12 text-[#e3702e] mb-4" />
                    <p className="text-[#132160] font-semibold">
                      FMCG Excellence
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Swift market presence for your products
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Code className="w-12 h-12 text-[#e3702e] mb-4" />
                    <p className="text-[#132160] font-semibold">
                      IT Innovation
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Tailored technology solutions
                    </p>
                  </motion.div>
                </div>

                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <UsersRound className="w-12 h-12 text-[#e3702e] mb-4" />
                  <p className="text-[#132160] font-semibold text-xl">
                    Strategic Staffing Solutions
                  </p>
                  <p className="text-gray-600 mt-2">
                    Align talent with your organizational goals
                  </p>
                </motion.div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variants={fadeInLeft}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-6">
                    Excellence in Every Solution
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Our specialized services and unique blend of strategy, technology, design capability and quality implementation has helped us gain our clients' confidence and excel in this domain of portal development.
                    </p>
                    <p>
                      Choosing Navarna means choosing a reliable partner invested in your success. Join us on a journey where innovation meets quality, and client satisfaction is not just a goal but a guarantee.
                    </p>
                    <p>
                      Let Navarna be the driving force behind your business growth and prosperity. Welcome to a world where excellence is not just a commitment but a way of doing business.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variants={fadeInRight}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full border-[6px] border-[#e3702e] rounded-lg"></div>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Team meeting" 
                    className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-[#e3702e]"></div>
                <span className="text-[#e3702e] font-bold text-sm tracking-wider uppercase">Our Values</span>
                <div className="h-px w-12 bg-[#e3702e]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimateOnScroll>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border-2 border-transparent hover:border-[#e3702e]"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-[#132160] rounded-full mb-6 group-hover:bg-gradient-to-br group-hover:from-[#e3702e] group-hover:to-[#f58642] group-hover:text-white transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#132160] mb-3 group-hover:text-[#e3702e] transition-colors">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px w-12 bg-[#e3702e]"></div>
                  <span className="text-[#e3702e] font-bold text-sm tracking-wider uppercase">What We Offer</span>
                  <div className="h-px w-12 bg-[#e3702e]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-4">
                  Our Specialized Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A unique blend of strategy, technology, design capability and quality implementation
                </p>
              </div>
            </AnimateOnScroll>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-[#132160] to-[#1a2d7a] p-8 rounded-2xl text-white shadow-xl cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e3702e] to-[#f58642] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <AnimateOnScroll>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-l-4 border-[#e3702e] shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our specialized services and unique blend of strategy, technology, design capability and quality implementation has helped us gain our clients' confidence and excel in this domain of portal development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Navarna, we thrive in dynamic business landscapes, adapting to change and consistently delivering solutions that surpass expectations. Our team of skilled professionals is not only experts in their fields but also dedicated to understanding your specific needs.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variants={fadeInLeft}>
                <div className="order-2 md:order-1">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border-2 border-blue-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative">
                      <svg viewBox="0 0 400 300" className="w-full h-auto">
                        {/* Magnifying Glass */}
                        <motion.circle 
                          cx="200" cy="120" r="60" fill="#132160" opacity="0.1"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="200" cy="120" r="50" fill="none" stroke="#e3702e" strokeWidth="6"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.line 
                          x1="235" y1="155" x2="270" y2="190" stroke="#e3702e" strokeWidth="6" strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        
                        {/* Business person */}
                        <motion.ellipse 
                          cx="80" cy="100" rx="15" ry="20" fill="#132160"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                        />
                        <motion.rect 
                          x="65" y="120" width="30" height="40" rx="5" fill="#132160"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 }}
                        />
                        <motion.line 
                          x1="80" y1="140" x2="130" y2="120" stroke="#132160" strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                        />
                        
                        {/* Small people figures */}
                        {[0, 1, 2, 3, 4, 5].map((row) =>
                          [0, 1, 2, 3, 4].map((col) => (
                            <motion.g 
                              key={`${row}-${col}`} 
                              transform={`translate(${180 + col * 25}, ${200 + row * 20})`}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1.5 + (row + col) * 0.05, duration: 0.3 }}
                            >
                              <circle cx="0" cy="0" r="3" fill="#64748B"/>
                              <rect x="-2" y="4" width="4" height="8" rx="1" fill="#64748B"/>
                            </motion.g>
                          ))
                        )}
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll variants={fadeInRight}>
                <div className="order-1 md:order-2">
                  <p className="text-[#e3702e] font-bold text-sm tracking-wider uppercase mb-4">Why Choose Us</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-6">
                    We're A Reliable And Cost Efficient Partner
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Together, as Navarna Bharat, we seamlessly integrate the strengths and capabilities of both entities to offer a comprehensive suite of services and solutions.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Whether you are seeking top-notch staffing solutions or looking to explore the vast potential of the Indian FMCG market, Navarna Bharat is your strategic partner for success.
                  </p>
                  <motion.div 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3"
                        variants={fadeInUp}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="w-6 h-6 text-[#e3702e] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>
  );
};

export default About;
