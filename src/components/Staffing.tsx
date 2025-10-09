import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  Briefcase,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StaffingPage = () => {
  const staffingServices = [
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

  const apprenticeshipServices = [
    "National Apprenticeship Promotion Scheme (NAPS)",
    "National Apprenticeship Training Scheme (NATS)",
    "Bachelor of Vocation Education (B. VoC)",
  ];

  const features = [
    "Simple, visual dashboard with on-point reports",
    "Build custom reports that make sense for your business",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  TAILORED STAFFING SOLUTIONS
                </h1>
                <p className="text-xl text-blue-200 mb-8">
                  Connecting talent with opportunity through innovative
                  workforce solutions
                </p>
              </div>
              <div className="relative">
                {/* <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Staffing Solutions"
                  className="rounded-2xl shadow-2xl"
                /> */}
              </div>
            </div>
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

      {/* Bito Jobs Flagship Product Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
              Our Flagship Product
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Bito Jobs – Powering Your Recruitment Success
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Bito Jobs is our comprehensive job portal that streamlines your
              entire staffing process. From recruitment and contract staffing to
              payroll management and outsourcing solutions, we've got you
              covered.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <img
              src="/Black White and Orange Modern Pitch Deck Presentation.png"
              alt="Bito Jobs Portal Screenshot"
              className="rounded-2xl shadow-2xl border-4 border-yellow-200 object-cover w-full md:w-1/2"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Staffing Solutions:
              </h3>
              <ul className="mb-6 space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-700" />
                  <span className="text-gray-900 font-semibold">
                    Recruitment & Talent Acquisition
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-yellow-700" />
                  <span className="text-gray-900 font-semibold">
                    Contract & Temporary Staffing
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-700" />
                  <span className="text-gray-900 font-semibold">
                    Payroll Management Services
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-yellow-700" />
                  <span className="text-gray-900 font-semibold">
                    HR Outsourcing Solutions
                  </span>
                </li>
              </ul>
              <a
                href="https://bitojobs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-yellow-400 text-gray-900 rounded-full px-8 py-3 font-semibold inline-flex items-center shadow-md hover:bg-yellow-500 transition-all">
                  Explore Bito Jobs <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  What We Do
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                  Tech Based HR & Business Solution Company
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Navarna Bharat, your premier destination for
                    cutting-edge, technology-enabled human resource, staffing,
                    and managed outsourcing services across diverse industries
                    and sectors, including Manufacturing, Service, Sales &
                    Marketing, IT/ITES, and Back office operations.
                  </p>

                  <p>
                    Our commitment to delivering exceptional services is
                    underlined by our innovative use of digital platforms,
                    establishing us as India's fastest-growing employer. At
                    Navarna Bharat, we go beyond traditional staffing solutions.
                    We are catalysts of change, constantly striving to enhance
                    workforce productivity and elevate the standards of
                    employability.
                  </p>

                  <p>
                    At Navarna, we thrive in dynamic business landscapes,
                    adapting to change and consistently delivering solutions
                    that surpass expectations. Our team of skilled professionals
                    is not only experts in their fields but also dedicated to
                    understanding your specific needs.
                  </p>

                  <p>
                    Our business strategy is meticulously aligned with our
                    vision for a more productive and skilled workforce. We
                    invest in training and skill development programs, ensuring
                    that individuals are equipped with the expertise needed for
                    evolving industries. Our digital transformation initiatives
                    streamline workflows, making job opportunities easily
                    accessible for seekers, and contributing to the social
                    security benefits of a wider employable population.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://navarna.com/public/assetsfront/img/StaffingImg5.jpg"
                  alt="HR Solutions Team"
                  className="ml-28 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Discover The Staffing Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Staffing & Manpower */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src="https://navarna.com/public/assetsfront/img/StaffingImg6.jpg"
                    alt="Talent Acquisition"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Manpower
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Staffing, Manpower & Talent Acquisition Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To provide comprehensive staffing solutions and talent
                    acquisition services, including but not limited to:
                  </p>
                  <ul className="space-y-2">
                    {staffingServices.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apprenticeship Services */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src="https://navarna.com/public/assetsfront/img/StaffingImg4.jpg"
                    alt="Apprenticeship Services"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Services
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Apprenticeship Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The company aims to be a key player in providing
                    comprehensive Apprenticeship Services, facilitating skill
                    development, and fostering the integration of apprentices
                    into the workforce. Apprenticeship services will include but
                    not limited to:
                  </p>
                  <ul className="space-y-3">
                    {apprenticeshipServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skill Development */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src="https://navarna.com/public/assetsfront/img/StaffingImg2.jpg"
                    alt="Skill Development"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Development
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Skill Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To undertake skill development initiatives with a focus on
                    enhancing employability and fostering professional growth.
                    This involves designing and conducting training programs,
                    workshops, and courses aimed at developing a broad range of
                    skills, contributing to the overall development of
                    individuals and the community.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Key Focus Areas:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Enhancing employability
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Fostering professional growth
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Comprehensive training programs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Community development
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Our Core Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Comprehensive Staffing Solutions
              </h2>
            </div>

            <div className="space-y-12">
              {/* Recruitment */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      Recruitment
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Navarna, we specialize in identifying, evaluating, and
                    placing top talent across industries. Our recruitment
                    process is designed to match the right people with the right
                    roles, ensuring a perfect fit for both candidates and
                    employers. Using advanced screening tools, behavioral
                    assessments, and AI-powered sourcing techniques, we shorten
                    hiring timelines while maintaining quality. Whether you're
                    seeking entry-level professionals or executive leadership,
                    we deliver tailored hiring solutions that drive growth.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                    alt="Recruitment Services"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Contract Staffing */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                    alt="Contract Staffing"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      Contract Staffing
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our contract staffing solutions offer flexibility and
                    scalability for businesses that require a dynamic workforce.
                    We provide skilled professionals on short-term or
                    project-based contracts, allowing you to optimize resources
                    without long-term commitments. Navarna manages all
                    employment formalities — from onboarding to compliance — so
                    you can focus on your business objectives while we handle
                    workforce administration.
                  </p>
                </div>
              </div>

              {/* Payroll Services */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      Payroll Services
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Simplify your payroll management with Navarna's end-to-end
                    payroll solutions. We handle salary processing, tax
                    compliance, statutory filings, reimbursements, and employee
                    benefits with precision and confidentiality. Our
                    technology-driven payroll systems ensure timely
                    disbursements and error-free processing, giving you complete
                    transparency and peace of mind.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                    alt="Payroll Services"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Outsourcing */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="HR Outsourcing"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      Outsourcing
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Focus on your core operations while we manage your HR and
                    administrative processes. Navarna's outsourcing services
                    cover recruitment, payroll, onboarding, compliance, and HR
                    documentation. We help businesses reduce overhead costs,
                    increase efficiency, and maintain compliance with local
                    labor laws — offering reliable support for both domestic and
                    international operations.
                  </p>
                </div>
              </div>

              {/* Background Verification */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-8 h-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      Background Verification
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Trust and integrity are the foundation of every great hire.
                    Our comprehensive background verification services include
                    employment history checks, education verification, criminal
                    record screening, and address validation. Using secure,
                    technology-enabled processes, we help organizations ensure
                    that every employee meets ethical and professional standards
                    before joining the team.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
                    alt="Background Verification"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
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

export default StaffingPage;
