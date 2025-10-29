import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import SobreSection from "@/components/SobreSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <SobreSection/>
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
