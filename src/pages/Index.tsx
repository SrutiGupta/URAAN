import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TreatmentProcess } from "@/components/home/TreatmentProcess";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <TreatmentProcess />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
