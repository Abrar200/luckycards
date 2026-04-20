import React from 'react';
import Navbar from '@/components/lucky/Navbar';
import HeroSection from '@/components/lucky/HeroSection';
import ProductSection from '@/components/lucky/ProductSection';
import HowItWorks from '@/components/lucky/HowItWorks';
import WhyLuckyCards from '@/components/lucky/WhyLuckyCards';
import VisualExperience from '@/components/lucky/VisualExperience';
import TrustCredibility from '@/components/lucky/TrustCredibility';
import ForOperators from '@/components/lucky/ForOperators';
import Integrations from '@/components/lucky/Integrations';
import GameGuideCTA from '@/components/lucky/GameGuideCTA';
import FinalCTA from '@/components/lucky/FinalCTA';
import ContactForm from '@/components/lucky/ContactForm';
import Footer from '@/components/lucky/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <HowItWorks />
      <WhyLuckyCards />
      <VisualExperience />
      <ForOperators />
      <TrustCredibility />
      <Integrations />
      <GameGuideCTA />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AppLayout;
