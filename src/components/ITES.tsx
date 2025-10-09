import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Code, Globe, ShoppingCart, Layers, 
  Settings, Database, CheckCircle, Zap, Shield, 
  Users, Target, Award, TrendingUp 
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

const ITESPage: React.FC = () => {
  const technologies: string[] = [
    "Laravel",
    "CodeIgniter",
    "Symfony",
    "PHP",
    "Angular",
    "ASP.NET"
  ];

  const maintenanceAMC: string[] = [
    "Modify and add website content",
    "Create, edit, and upload/remove text/images to PDF",
    "Update announcements, articles, news, etc.",
    "Manipulate and add images (client-supplied images like on-site progress pictures & videos)",
    "Technical troubleshooting and support",
    "Website review and performance optimization"
  ];

  const maintenanceNDW: string[] = [
    "Design or update Flash movies, banners, intros, ads, etc.",
    "Develop new web pages",
    "Design and develop Electronic Direct Mailers (EDMs)",
    "Design and develop online query forms or surveys",
    "Design or update virtual tours (via Flash/JavaScript)",
    "Design or update interactive master plans"
  ];

  const ecommerceFeatures: string[] = [
    "Product catalog",
    "Shopping cart",
    "Inventory management",
    "Seamless checkout",
    "Payment gateway",
    "Sales reports",
    "SEO friendly design",
    "Additional customizable features"
  ];

  const applicationDevSegments: string[] = [
    "Development of web and portal applications for both mobile and computers",
    "Development of middleware applications to ensure end-to-end application and data integration",
    "Development of composite applications to prepare current applications for the future",
    "Development of mobile applications, including design, support & maintenance, and verification"
  ];

  interface Stat {
    number: string;
    label: string;
  }

  const stats: Stat[] = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Royal Staffing Inspired */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    IT Services & Solutions
                  </span>
                </motion.div>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Information Technology and{" "}
                  <span className="text-orange-600">IT Enabled Services</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Innovative IT solutions that transcend boundaries and redefine the online landscape for your business success.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                    alt="IT Technology" 
                    className="rounded-3xl shadow-2xl w-full"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-3xl -z-0"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-4xl lg:text-5xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-orange-100 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                  Welcome to Navarna Bharat
                </h2>
                <motion.div 
                  className="w-24 h-1 bg-orange-600 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll variants={fadeInLeft}>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Navarna Bharat, where innovation meets excellence in the dynamic world of IT, web designing, and development. Situated in the vibrant hub of Noida Sector 62, Navarna Bharat is a pioneering company dedicated to crafting digital solutions that transcend boundaries and redefine the online landscape.
                  </p>
                  <p>
                    As a frontrunner in the industry, Navarna Bharat brings a unique blend of creativity, technical expertise, and unwavering commitment to delivering top-notch services. Our team of seasoned professionals is driven by a passion for turning ideas into reality, leveraging cutting-edge technologies to build bespoke websites and robust IT solutions.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variants={fadeInRight}>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    At Navarna Bharat, we understand that the digital realm is constantly evolving, and we thrive on staying ahead of the curve. Whether you are seeking innovative web designs, scalable IT solutions, or seamless development, our company stands as a beacon of reliability and innovation.
                  </p>
                  <p>
                    Our commitment to excellence extends beyond technology – it encompasses a client-centric approach, fostering strong partnerships and ensuring that each project is a collaborative journey. Join us on the forefront of digital evolution as we embark on a journey to redefine the standards of IT, web designing, and development.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design & Development Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                  Web Design & Development
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  "Designing solutions for the people interacting with the brand"
                </p>
                <motion.div 
                  className="w-24 h-1 bg-orange-600 mx-auto mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <AnimateOnScroll variants={fadeInLeft}>
                <div className="order-2 lg:order-1">
                  <div className="space-y-5 text-gray-700 leading-relaxed">
                    <p>
                      Navarna Bharat specializes in creating customer-centric web and software solutions. Our expertise lies in seamlessly integrating the right strategy, technology, and design to deliver solutions that consistently exceed customer expectations.
                    </p>
                    <p>
                      In today's world, having a web presence is crucial for sustaining business momentum. A website serves as an authentic representation of your business, offering not just information but also showcasing your work style.
                    </p>
                    <p>
                      Navarna Bharat, a leading web development and design company, can empower your digital presence with a fully-functional, modern website. Our websites are designed to provide you with a competitive edge in the industry.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variants={fadeInRight}>
                <div className="order-1 lg:order-2">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://navarna.com/public/assetsfront/img/web.jpg" 
                      alt="Web Design" 
                      className="rounded-2xl shadow-xl w-full"
                    />
                    <motion.div 
                      className="absolute -bottom-4 -left-4 w-full h-full bg-orange-100 rounded-2xl -z-10"
                      animate={{ rotate: [0, 2, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Corporate & Dynamic Website Cards */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Corporate Website Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="w-8 h-8 text-orange-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Website</h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Your brand's online appearance matters. Corporate website development is now a crucial aspect of modern business. Having a corporate website has become essential for the success of businesses, ranging from small enterprises to multinational corporations.
                  </p>
                  <p>
                    This is where corporate website development plays a vital role in the business landscape, particularly when coupled with an effective online marketing strategy. With the right approach, your company can connect with clients worldwide at a fraction of the cost compared to traditional advertising channels.
                  </p>
                  <p>
                    As a leading corporate web designing company, Navarna Bharat specializes in enhancing the online presence of brands like yours. Our team comprises talented specialists at the forefront of corporate website development, passionate about creating business websites from scratch and optimizing them for the best results.
                  </p>
                </div>
              </motion.div>

              {/* Dynamic Website Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-8 h-8 text-orange-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Dynamic Website</h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A dynamic website changes itself automatically based on certain criteria, user interaction, or business logic. It aims to automate your business processes, providing a live user experience by altering content in response to different situations.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-xl mt-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Custom Application Development
                    </h4>
                    <p className="text-gray-700">
                      Our skilled in-house team uses advanced technologies to create stunning, robust, secure, and scalable custom web applications. We follow an agile development methodology for flexibility and faster delivery.
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">PHP Development:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors cursor-pointer"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variants={fadeInLeft}>
                <div>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Maintenance</span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                    Website Maintenance Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Website maintenance involves updating, editing, or making changes to existing web pages to ensure your website stays current. Navarna Bharat Solutions divides web maintenance tasks into two categories:
                  </p>

                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* AMC Card */}
                    <motion.div 
                      className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                      variants={scaleIn}
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-white font-bold">1</span>
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Annual Maintenance Cost (AMC)
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {maintenanceAMC.map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* NDW Card */}
                    <motion.div 
                      className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                      variants={scaleIn}
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-white font-bold">2</span>
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900">
                          New Development Work (NDW)
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Add new web pages and other development updates periodically to keep the website vibrant and attract visitors:
                      </p>
                      <ul className="space-y-3">
                        {maintenanceNDW.map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variants={fadeInRight}>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    <img 
                      src="https://navarna.com/public/assetsfront/img/ItImg5.jpg" 
                      alt="Website Maintenance" 
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                  <motion.div 
                    className="absolute -top-6 -right-6 w-full h-full bg-orange-100 rounded-2xl -z-0"
                    animate={{ rotate: [0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Development</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                  Software Development
                </h2>
                <motion.div 
                  className="w-24 h-1 bg-orange-600 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
                Navarna Bharat, with over 5 years of IT experience, specializes in assisting Real Estate brands with big ideas. Our expertise spans the entire software development life cycle, from requirement analysis to maintenance.
              </p>
            </AnimateOnScroll>

            <motion.div 
              className="grid lg:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* CRM Card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all"
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Database className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">Navarna Bharat - SALES CRM</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Wondering how to effectively handle and nurture your sales leads for positive outcomes? At Navarna Bharat, we understand the challenges of managing sales efficiency and an effective team. That's why we offer an online/offline application that works seamlessly on all platforms (mobile, iPads, tablets, PCs) anytime, anywhere. Our solution combines CRM, API, closed-loop reporting, and monitoring for improved sales results on time.
                </p>
              </motion.div>

              {/* Lead Management Card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all"
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">Lead Management System</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Companies allocate different amounts for their marketing and sales departments, ranging from 10% to 50% of their revenues. To run a successful marketing and sales campaign, it's crucial to have an organized and strategic plan. In this proposal, Navarna Bharat offers a Marketing Plan Analysis & Solutions to enhance the effectiveness and efficiency of your marketing campaign.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Online Business</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                  E-commerce Solutions
                </h2>
                <motion.div 
                  className="w-24 h-1 bg-orange-600 mx-auto mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  E-commerce is a cost-effective way to expand your reach to new markets, diverse customers, and specific niche segments. When implemented successfully, it can lead to significant business growth, multiplying sales and revenues.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Features Card */}
              <AnimateOnScroll variants={fadeInLeft}>
                <motion.div 
                  className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-10 text-white shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ShoppingCart className="w-8 h-8 text-orange-600" />
                    </motion.div>
                    <h3 className="text-3xl font-bold">E-Commerce Features</h3>
                  </div>
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {ecommerceFeatures.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3"
                        variants={fadeInUp}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimateOnScroll>

              {/* Description Card */}
              <AnimateOnScroll variants={fadeInRight}>
                <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Our E-Commerce Solutions?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Navarna Bharat's E-Commerce solution offers control over various operations on your website, including product management, a customized shopping cart, credit card processing, shipping module integration, and order processing.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Navarna Bharat, we offer affordable and customized software services tailored to meet your specific requirements. Our designs and technology development aim to deliver impactful results, directly enhancing your bottom line.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Application Development & Management */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Application Development */}
              <motion.div 
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Layers className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold">Application Development</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We offer solutions to support, enhance, and manage a customer's application portfolio. Our services encompass a range of development solutions in both proven and emerging technologies.
                </p>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {applicationDevSegments.map((segment, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl"
                      variants={fadeInUp}
                      whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <motion.div 
                        className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </motion.div>
                      <span className="text-gray-300">{segment}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Application Management */}
              <motion.div 
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold">Application Management</h2>
                </div>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>
                    Companies now require their business applications to be managed around the clock, ensuring they remain secure, reliable, and maintainable. The goal is to have solutions that guarantee high availability and performance, monitoring components, and resolving production issues.
                  </p>
                  <p>
                    We facilitate a smooth transfer of knowledge from the existing Maintenance/Development team to our maintenance team. Our services cover preventive, adaptive, and corrective maintenance.
                  </p>
                  <p>
                    Our services include fixing bugs, identifying and correcting latent errors, assessing the impact of new releases, suggesting improvements, maintaining technical and user documentation, monitoring applications for data integrity and performance, and operating a 24x7 Helpdesk.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                  Information Technology and IT Enabled Services
                </h2>
                <motion.div 
                  className="w-24 h-1 bg-orange-600 mx-auto mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <div className="max-w-4xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    In the Information Technology and IT Enabled Services (ITES) domain, Navarna is a leading player offering cutting-edge solutions to meet the diverse and evolving needs of businesses. Our IT-ITES business line is characterized by a commitment to innovation, technological expertise, and a client-centric approach.
                  </p>
                  <p>
                    In the ever-evolving landscape of modern technologies, NAVARNA emerges as a pioneering force committed to delivering cutting-edge IT solutions that propel businesses into the future. Rooted in a steadfast commitment to innovation, our company stands at the forefront of transformative technologies.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Service Cards Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  image: "https://navarna.com/public/img/solution.jpg",
                  badge: "Solutions",
                  title: "Innovative IT Solutions",
                  description: "At Navarna, we pride ourselves on being at the forefront of technological innovation. Our IT solutions are designed to address the challenges and opportunities presented by the ever-changing landscape of the digital world. From software development and application design to cloud computing and cybersecurity."
                },
                {
                  image: "https://navarna.com/public/img/solution1.jpg",
                  badge: "Services",
                  title: "Tailored IT Services",
                  description: "We understand that each business is unique, and one-size-fits-all solutions do not always suffice. Our approach involves understanding the specific needs and goals of our clients, allowing us to tailor our IT services accordingly. Whether you are a startup looking for scalable solutions or an established enterprise seeking digital transformation."
                },
                {
                  image: "https://navarna.com/public/img/solution2.jpeg",
                  badge: "Infrastructure",
                  title: "Robust IT Infrastructure",
                  description: "Navarna is dedicated to building and maintaining robust IT infrastructure for businesses. This includes network architecture, data storage, and server management, ensuring a secure and efficient foundation for your digital operations. Our team of IT experts collaborates with clients to create scalable and future-ready infrastructure."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        {service.badge}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Security and BPO Cards */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  image: "https://navarna.com/public/img/solution3.jpg",
                  badge: "Security",
                  title: "Data Security and Compliance",
                  description: "In an era where data is a critical asset, Navarna places a strong emphasis on data security and compliance. We implement robust cybersecurity measures to safeguard sensitive information and ensure compliance with industry regulations. Our focus on data integrity and privacy gives our clients the confidence that their digital assets are in safe hands."
                },
                {
                  image: "https://navarna.com/public/img/solution4.jpg",
                  badge: "BPO",
                  title: "ITES - Business Process Outsourcing (BPO)",
                  description: "Navarna's ITES offerings extend to Business Process Outsourcing (BPO) services. From customer support and data entry to back-office processes, our BPO services are designed to streamline operations, reduce costs, and enhance overall efficiency. We leverage technology to automate repetitive tasks, allowing businesses to focus on their core competencies."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        {service.badge}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ITESPage;
