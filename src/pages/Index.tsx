import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientsSlider from "@/components/ClientsSlider";
import BitoJobsShowcase from "@/components/BitoJobsShowcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Categories from "@/components/Categories";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingBitoCTA from "@/components/FloatingBitoCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientsSlider />

      {/* Prime Product Showcase - Prominently positioned */}
      <BitoJobsShowcase />

      <About />
      <WhyChooseUs />
      {/*<Categories />*/}
      <Industries />
      <HowItWorks />
      <Team />
      <News />
      {/*<Newsletter />*/}
      <Footer />

      {/* Floating CTA for Bito Jobs */}
      <FloatingBitoCTA />
    </div>
  );
};

export default Index;
