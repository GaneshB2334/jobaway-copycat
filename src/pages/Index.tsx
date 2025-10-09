import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientsSlider from "@/components/ClientsSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Categories from "@/components/Categories";
import BitoJobs from "@/components/BitoJobs";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientsSlider />
      <About />

      <WhyChooseUs />
      <Categories />
      <Industries />
      <HowItWorks />
      <Team />
      <News />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
