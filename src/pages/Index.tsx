import { useState, useEffect } from "react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import BenefitsSection from "@/components/BenefitsSection";
import CategoryIcons from "@/components/CategoryIcons";
import ProductList from "@/components/ProductList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const isContact = window.location.hash === "#contato";
      setShowContact(isContact);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PromoBanner />
        <BenefitsSection />
        {!showContact && <CategoryIcons />}
        {showContact ? <ContactSection /> : <ProductList />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
