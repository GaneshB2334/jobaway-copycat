import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, ShoppingCart, Layers, Settings, Database, CheckCircle, Zap, Shield } from "lucide-react";
// import Footer from "./Footer";
import Navigation from "./Navigation";
import Footer from "./Footer";





const ITESPage = () => {
  const technologies = [
    "Laravel",
    "CodeIgniter",
    "Symfony",
    "PHP",
    "Angular",
    "ASP.NET"
  ];

  const maintenanceAMC = [
    "Modify and add website content",
    "Create, edit, and upload/remove text/images to PDF",
    "Update announcements, articles, news, etc.",
    "Manipulate and add images (client-supplied images like on-site progress pictures & videos)",
    "Technical troubleshooting and support",
    "Website review and performance optimization"
  ];

  const maintenanceNDW = [
    "Design or update Flash movies, banners, intros, ads, etc.",
    "Develop new web pages",
    "Design and develop Electronic Direct Mailers (EDMs)",
    "Design and develop online query forms or surveys",
    "Design or update virtual tours (via Flash/JavaScript)",
    "Design or update interactive master plans"
  ];

  const ecommerceFeatures = [
    "Product catalog",
    "Shopping cart",
    "Inventory management",
    "Seamless checkout",
    "Payment gateway",
    "Sales reports",
    "SEO friendly design",
    "Additional customizable features"
  ];

  const applicationDevSegments = [
    "Development of web and portal applications for both mobile and computers",
    "Development of middleware applications to ensure end-to-end application and data integration",
    "Development of composite applications to prepare current applications for the future",
    "Development of mobile applications, including design, support & maintenance, and verification"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  INFORMATION TECHNOLOGY AND IT ENABLED SERVICES
                </h1>
                <p className="text-2xl text-blue-200 mb-8">
                  Innovative IT Solution
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="IT Technology" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Introduction</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Welcome to Navarna Bharat, where innovation meets excellence in the dynamic world of IT, web designing, and development. Situated in the vibrant hub of Noida Sector 62, Navarna Bharat is a pioneering company dedicated to crafting digital solutions that transcend boundaries and redefine the online landscape.
              </p>
              <p>
                As a frontrunner in the industry, Navarna Bharat brings a unique blend of creativity, technical expertise, and unwavering commitment to delivering top-notch services. Our team of seasoned professionals is driven by a passion for turning ideas into reality, leveraging cutting-edge technologies to build bespoke websites and robust IT solutions.
              </p>
              <p>
                At Navarna Bharat, we understand that the digital realm is constantly evolving, and we thrive on staying ahead of the curve. Whether you are seeking innovative web designs, scalable IT solutions, or seamless development, our company stands as a beacon of reliability and innovation.
              </p>
              <p>
                Our commitment to excellence extends beyond technology – it encompasses a client-centric approach, fostering strong partnerships and ensuring that each project is a collaborative journey. Navarna Bharat is not just a company; it's a commitment to transforming your digital aspirations into a thriving reality.
              </p>
              <p>
                Join us on the forefront of digital evolution as we embark on a journey to redefine the standards of IT, web designing, and development. Welcome to Navarna Bharat – where the future of digital excellence begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design & Development */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold mb-2">Web Design & Development</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                "Designing solutions for the people interacting with the brand"
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://navarna.com/public/assetsfront/img/web.jpg" 
                  alt="Web Design" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Navarna Bharat specializes in creating customer-centric web and software solutions. Our expertise lies in seamlessly integrating the right strategy, technology, and design to deliver solutions that consistently exceed customer expectations. We provide a diverse range of services in the online web space.
                </p>
                <p>
                  In today's world, having a web presence is crucial for sustaining business momentum. A website serves as an authentic representation of your business, offering not just information but also showcasing your work style. Therefore, creating a website demands dedication and enthusiasm, utilizing the latest and most advanced web development techniques.
                </p>
                <p>
                  Navarna Bharat, a leading web development and design company, can empower your digital presence with a fully-functional, modern website. Our websites are designed to provide you with a competitive edge in the industry.
                </p>
              </div>
            </div>

            {/* Corporate & Dynamic Website */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Website</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your brand's online appearance matters. Corporate website development is now a crucial aspect of modern business. In recent years, having a corporate website has become essential for the success of businesses, ranging from small enterprises to multinational corporations. Regardless of your offerings or objectives, business growth relies on expanding your customer base, and the internet provides the ideal platform for this growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is where corporate website development plays a vital role in the business landscape, particularly when coupled with an effective online marketing strategy. With the right approach, your company can connect with clients worldwide at a fraction of the cost compared to traditional advertising channels like television or radio.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a leading corporate web designing company, Navarna Bharat specializes in enhancing the online presence of brands like yours. Our team comprises talented specialists at the forefront of corporate website development, passionate about creating business websites from scratch and optimizing them for the best results. Importantly, our corporate web development team knows how to keep you ahead of your competition.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Effective corporate website development begins with a professional, up-to-date design that reflects your business's attitude. A sleek and user-friendly layout makes your company appear inviting and encourages customer interaction. However, creating an engaging and intuitive corporate website is a specialized task that demands hard work. If your website doesn't look good or isn't user-friendly, visitors may leave before discovering what you have to offer.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Dynamic Website</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A dynamic website changes itself automatically based on certain criteria, user interaction, or business logic. It aims to automate your business processes, providing a live user experience by altering content (text, images, form fields, etc.) in response to different situations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A web portal unifies information from various sources, offering services like e-mail, news, stock prices, databases, and entertainment, in addition to the standard search engine feature. There are two main types of portals:
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Custom Application Development:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our skilled in-house team uses advanced technologies to create stunning, robust, secure, and scalable custom web applications. We follow an agile development methodology for flexibility and faster delivery.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">PHP Development:</h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Maintenance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Maintenance</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Website maintenance involves updating, editing, or making changes to existing web pages to ensure your website stays current. Navarna Bharat Solutions divides web maintenance tasks into two categories:
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. Annual Maintenance Cost (AMC):</h3>
                    <ul className="space-y-2">
                      {maintenanceAMC.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2. New Development Work (NDW):</h3>
                    <p className="text-gray-700 mb-4">
                      Add new web pages and other development updates periodically to keep the website vibrant and attract visitors. This includes tasks such as:
                    </p>
                    <ul className="space-y-2">
                      {maintenanceNDW.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-950 to-blue-900 rounded-2xl p-8 shadow-2xl">
                  <img 
                    src="https://navarna.com/public/assetsfront/img/ItImg5.jpg" 
                    alt="Website Maintenance" 
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Software Development</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Navarna Bharat, with over 5 years of IT experience, specializes in assisting Real Estate brands with big ideas. Our expertise spans the entire software development life cycle, from requirement analysis to maintenance. We offer unparalleled software design and development services, covering a wide range of applications and systems on leading technologies.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold">Navarna Bharat - SALES CRM</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Wondering how to effectively handle and nurture your sales leads for positive outcomes? At Navarna Bharat, we understand the challenges of managing sales efficiency and an effective team. That's why we offer an online/offline application that works seamlessly on all platforms (mobile, iPads, tablets, PCs) anytime, anywhere, and however you need it. Our solution combines CRM, API, closed-loop reporting, and monitoring for improved sales results on time. Navarna Bharat's online CRM is a quick and easy solution that can be hosted alongside your website.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold">Lead Management System</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Companies allocate different amounts for their marketing and sales departments, ranging from 10% to 50% of their revenues, according to statistics. This substantial investment aims to generate leads and boost profit margins. To run a successful marketing and sales campaign, it's crucial to have an organized and strategic plan. This plan should not only involve spending but also allow for monitoring expenses in relation to the conversion ratio. In this proposal, Navarna Bharat offers a Marketing Plan Analysis & Solutions to enhance the effectiveness and efficiency of your marketing campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">E-commerce</h2>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                E-commerce is a cost-effective way to expand your reach to new markets, diverse customers, and specific niche segments. When implemented successfully, it can lead to significant business growth, multiplying sales and revenues. Navarna Bharat's E-Commerce solution offers control over various operations on your website, including product management, a customized shopping cart, credit card processing, shipping module integration, and order processing. Our advanced stock and inventory management system provides real-time information about different product categories. We simplify shipping module and gateway integration for a smooth and dependable experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <ShoppingCart className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our E-Commerce features include:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {ecommerceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Navarna Bharat, we offer affordable and customized software services tailored to meet your specific requirements. Our designs and technology development aim to deliver impactful results, directly enhancing your bottom line. After a free analysis of your unique needs, we utilize the right tools to boost your Return on Investment (ROI).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Development & Management */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-12 h-12 text-orange-400" />
                  <h2 className="text-4xl font-bold">Application Development</h2>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  We offer solutions to support, enhance, and manage a customer's application portfolio. Our services encompass a range of development solutions in both proven and emerging technologies. From consulting to a seamless transition, we provide customers with a comprehensive set of solutions, followed by technical and functional support. Navarna Bharat specializes in solutions for the following segments:
                </p>
                <ul className="space-y-3">
                  {applicationDevSegments.map((segment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-400 font-bold">{index + 1}.</span>
                      <span className="text-blue-100">{segment}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-blue-100 leading-relaxed mt-6">
                  Throughout the development process, we adopt a flexible approach to meet the specific needs of our customers.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-12 h-12 text-orange-400" />
                  <h2 className="text-4xl font-bold">Application Management</h2>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Companies now require their business applications to be managed around the clock, ensuring they remain secure, reliable, and maintainable. The goal is to have solutions that guarantee high availability and performance, monitoring components, and resolving production issues.
                </p>
                <p className="text-blue-100 leading-relaxed mb-6">
                  We facilitate a smooth transfer of knowledge from the existing Maintenance/Development team to our maintenance team. Our services cover preventive, adaptive, and corrective maintenance. We collaborate with the client's business and IT teams to seamlessly transition functional and technical enhancements into operational activities.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Our services include fixing bugs, identifying and correcting latent errors, assessing the impact of new releases, suggesting improvements, maintaining technical and user documentation, monitoring applications for data integrity and performance, and operating a 24x7 Helpdesk. We are committed to continuous productivity improvement through defined strategies, innovations, and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Service */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-8">
                Information Technology and IT Enabled Services ITES
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                In the Information Technology and IT Enabled Services (ITES) domain, Navarna is a leading player offering cutting-edge solutions to meet the diverse and evolving needs of businesses. Our IT-ITES business line is characterized by a commitment to innovation, technological expertise, and a client-centric approach. In the ever-evolving landscape of modern technologies, NAVARNA emerges as a pioneering force committed to delivering cutting-edge IT solutions that propel businesses into the future. Rooted in a steadfast commitment to innovation, our company stands at the forefront of transformative technologies, offering an extensive suite of services meticulously crafted to meet the dynamic needs of the digital era.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Innovative IT Solutions */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src="https://navarna.com/public/img/solution.jpg" 
                    alt="Innovative IT Solutions" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                    Solutions
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative IT Solutions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    At Navarna, we pride ourselves on being at the forefront of technological innovation. Our IT solutions are designed to address the challenges and opportunities presented by the ever-changing landscape of the digital world. From software development and application design to cloud computing and cybersecurity, we provide a comprehensive suite of services that empower businesses to thrive in the digital era.
                  </p>
                </div>
              </div>

              {/* Tailored IT Services */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src="https://navarna.com/public/img/solution1.jpg" 
                    alt="Tailored IT Services" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                    Services
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored IT Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We understand that each business is unique, and one-size-fits-all solutions do not always suffice. Our approach involves understanding the specific needs and goals of our clients, allowing us to tailor our IT services accordingly. Whether you are a startup looking for scalable solutions or an established enterprise seeking digital transformation.
                  </p>
                </div>
              </div>

              {/* Robust IT Infrastructure */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src="https://navarna.com/public/img/solution2.jpeg" 
                    alt="Robust IT Infrastructure" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                    Infrastructure
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Robust IT Infrastructure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Navarna is dedicated to building and maintaining robust IT infrastructure for businesses. This includes network architecture, data storage, and server management, ensuring a secure and efficient foundation for your digital operations. Our team of IT experts collaborates with clients to create scalable and future-ready infrastructure that can adapt to evolving business requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Security and BPO */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Security and Compliance */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src="https://navarna.com/public/img/solution3.jpg" 
                    alt="Data Security" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                    Security
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security and Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In an era where data is a critical asset, Navarna places a strong emphasis on data security and compliance. We implement robust cybersecurity measures to safeguard sensitive information and ensure compliance with industry regulations. Our focus on data integrity and privacy gives our clients the confidence that their digital assets are in safe hands.
                  </p>
                </div>
              </div>

              {/* BPO Services */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src="https://navarna.com/public/img/solution4.jpg" 
                    alt="BPO Services" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                    BPO
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ITES - Business Process Outsourcing (BPO)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Navarna's ITES offerings extend to Business Process Outsourcing (BPO) services. From customer support and data entry to back-office processes, our BPO services are designed to streamline operations, reduce costs, and enhance overall efficiency. We leverage technology to automate repetitive tasks, allowing businesses to focus on their core competencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ITESPage;