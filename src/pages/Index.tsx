import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import BenefitsSection from "@/components/BenefitsSection";
import CategoryIcons from "@/components/CategoryIcons";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PromoBanner />
        <BenefitsSection />
        <CategoryIcons />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
