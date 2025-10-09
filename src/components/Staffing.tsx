import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Users, Award, TrendingUp, Target, CheckCircle, 
  Briefcase, GraduationCap, UserCheck, Building2, Clock, Shield 
} from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef, ReactNode } from "react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// AnimateOnScroll component
interface AnimateOnScrollProps {
  children: ReactNode;
  variants?: Variants;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, variants = fadeInUp }) => {
  const ref = useRef<HTMLDivElement>(null);
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

const StaffingPage: React.FC = () => {
  const staffingServices: string[] = [
    "Staffing Services",
    "Temp Staffing Services",
    "Fix Term Contract",
    "Recruitment",
    "Permanent Staffing",
    "Flexi Staffing",
    "International Staffing & Manpower Outsourcing",
    "Executive Search",
    "Mass and Bulk Hiring",
    "Outplacement Services",
    "Campus Hiring",
    "Payroll Services",
    "Manpower Statuary & Compliance Services",
    "Offshoring Solutions and consultancy",
  ];

  const apprenticeshipServices: string[] = [
    "National Apprenticeship Promotion Scheme (NAPS)",
    "National Apprenticeship Training Scheme (NATS)",
    "Bachelor of Vocation Education (B. VoC)",
  ];

  const features: string[] = [
    "Simple, visual dashboard with on-point reports",
    "Build custom reports that make sense for your business",
  ];

  interface Stat {
    number: string;
    label: string;
  }

  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section - Custom Navy & Orange */}
      <section className="relative bg-gradient-to-br from-[#132160] via-[#1a2d7a] to-[#132160] overflow-hidden min-h-[600px]">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orange Geometric Shape */}
          <motion.div 
            className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-[#e3702e] via-[#f58642] to-[#ff9c5a]"
            style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)" }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
                                 linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </motion.div>

          {/* White/Gray Geometric Shape */}
          <motion.div 
            className="absolute top-0 right-[25%] w-[35%] h-full bg-gradient-to-br from-white via-gray-50 to-gray-100"
            style={{ clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)" }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Dark Navy Overlay */}
          <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-[#132160] via-[#132160]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28 min-h-[600px]">
            {/* Left Side - Text */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Staffing Solutions
              </motion.span>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TAILORED STAFFING{" "}
                <span className="text-[#e3702e]">SOLUTIONS</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Connecting talent with opportunity through innovative workforce solutions
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-[#e3702e] hover:underline cursor-pointer font-semibold transition-colors">
                  Home
                </span>
                <span className="text-white text-2xl">»</span>
                <span className="text-white font-medium">Staffing Services</span>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative flex items-center justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="relative w-full max-w-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop" 
                  alt="Staffing Solutions" 
                  className="rounded-2xl shadow-2xl w-full border-4 border-white/20"
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#e3702e]/30 rounded-2xl -z-10"
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
      
      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variants={fadeInLeft}>
                <div>
                  <span className="text-[#e3702e] font-semibold text-sm uppercase tracking-wider">What We Do</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mt-3 mb-6">
                    Tech Based HR & Business Solution Company
                  </h2>
                  
                  <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                    <p>
                      Welcome to Navarna Bharat, your premier destination for cutting-edge, technology-enabled human resource, staffing, and managed outsourcing services across diverse industries and sectors, including Manufacturing, Service, Sales & Marketing, IT/ITES, and Back office operations.
                    </p>
                    
                    <p>
                      Our commitment to delivering exceptional services is underlined by our innovative use of digital platforms, establishing us as India's fastest-growing employer. At Navarna Bharat, we go beyond traditional staffing solutions. We are catalysts of change, constantly striving to enhance workforce productivity and elevate the standards of employability.
                    </p>
                    
                    <p>
                      At Navarna, we thrive in dynamic business landscapes, adapting to change and consistently delivering solutions that surpass expectations. Our team of skilled professionals is not only experts in their fields but also dedicated to understanding your specific needs.
                    </p>
                    
                    <p>
                      Our business strategy is meticulously aligned with our vision for a more productive and skilled workforce. We invest in training and skill development programs, ensuring that individuals are equipped with the expertise needed for evolving industries.
                    </p>
                  </div>

                  <motion.div 
                    className="mt-8 space-y-3"
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
                      >
                        <CheckCircle className="w-5 h-5 text-[#e3702e] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variants={fadeInRight}>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://navarna.com/public/assetsfront/img/StaffingImg5.jpg" 
                    alt="HR Solutions Team" 
                    className="rounded-2xl shadow-xl w-full border-4 border-[#132160]/10"
                  />
                  <motion.div 
                    className="absolute -top-4 -right-4 w-full h-full bg-[#e3702e]/20 rounded-2xl -z-10"
                    animate={{ rotate: [0, 2, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <span className="text-[#e3702e] font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mt-3 mb-6">
                  Discover The Staffing Services
                </h2>
                <motion.div 
                  className="w-24 h-1 bg-[#e3702e] mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </AnimateOnScroll>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Staffing & Manpower */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border-t-4 border-[#132160]"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src="https://navarna.com/public/assetsfront/img/StaffingImg6.jpg" 
                    alt="Talent Acquisition" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      className="bg-[#e3702e] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      Manpower
                    </motion.span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#132160] to-[#1a2d7a] rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#132160]">
                      Staffing & Talent Acquisition
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Comprehensive staffing solutions and talent acquisition services:
                  </p>
                  <ul className="space-y-2 max-h-96 overflow-y-auto pr-2">
                    {staffingServices.map((service, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#e3702e] flex-shrink-0 mt-1" />
                        <span className="text-sm">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Apprenticeship Services */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border-t-4 border-[#e3702e]"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src="https://navarna.com/public/assetsfront/img/StaffingImg4.jpg" 
                    alt="Apprenticeship Services" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      className="bg-[#e3702e] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      Services
                    </motion.span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#e3702e] to-[#f58642] rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#132160]">
                      Apprenticeship Services
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Comprehensive apprenticeship services facilitating skill development and workforce integration:
                  </p>
                  <ul className="space-y-3">
                    {apprenticeshipServices.map((service, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <Award className="w-5 h-5 text-[#e3702e] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 bg-gradient-to-br from-[#132160]/5 to-[#e3702e]/5 p-6 rounded-xl border border-[#132160]/10">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The company aims to be a key player in providing comprehensive Apprenticeship Services, facilitating skill development, and fostering the integration of apprentices into the workforce.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Skill Development */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border-t-4 border-[#132160]"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src="https://navarna.com/public/assetsfront/img/StaffingImg2.jpg" 
                    alt="Skill Development" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      className="bg-[#e3702e] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      Development
                    </motion.span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#132160] to-[#1a2d7a] rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <TrendingUp className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#132160]">
                      Skill Development
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Undertaking skill development initiatives with a focus on enhancing employability and fostering professional growth through comprehensive training programs.
                  </p>
                  <div className="bg-gradient-to-br from-[#132160]/5 to-[#e3702e]/5 p-6 rounded-xl border border-[#132160]/10">
                    <h4 className="font-bold text-[#132160] mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#e3702e]" />
                      Key Focus Areas:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { icon: <TrendingUp className="w-5 h-5 text-[#e3702e]" />, text: "Enhancing employability" },
                        { icon: <Target className="w-5 h-5 text-[#e3702e]" />, text: "Fostering professional growth" },
                        { icon: <GraduationCap className="w-5 h-5 text-[#e3702e]" />, text: "Comprehensive training programs" },
                        { icon: <Users className="w-5 h-5 text-[#e3702e]" />, text: "Community development" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          {item.icon}
                          <span className="text-gray-700">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#132160] via-[#1a2d7a] to-[#132160] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <span className="text-[#e3702e] font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
                  Why Choose Navarna Bharat?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  We combine technology, expertise, and dedication to deliver exceptional staffing solutions
                </p>
                <motion.div 
                  className="w-24 h-1 bg-[#e3702e] mx-auto mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </AnimateOnScroll>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <Users className="w-10 h-10" />, title: "Expert Team", description: "Skilled professionals dedicated to your success" },
                { icon: <Target className="w-10 h-10" />, title: "Tailored Solutions", description: "Customized strategies for your unique needs" },
                { icon: <TrendingUp className="w-10 h-10" />, title: "Fast Growth", description: "India's fastest-growing staffing platform" },
                { icon: <Award className="w-10 h-10" />, title: "Quality Service", description: "Excellence in every engagement" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-white/20 hover:border-[#e3702e] transition-all"
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#e3702e] rounded-xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#132160] mb-6">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-xl text-gray-700 mb-10">
                Let's discuss how our staffing solutions can transform your workforce
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={scaleIn}>
                  <Button className="bg-[#e3702e] hover:bg-[#c85e27] text-white px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg group">
                    Request a Consultation 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button className="bg-[#132160] hover:bg-[#0f1a4a] text-white px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg">
                    View Our Services
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
       
      <Footer />
    </div>
  );
};

export default StaffingPage;
