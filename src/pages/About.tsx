import React, { useEffect } from 'react';
import OurPurpose from '../components/OurPurpose';
import NordicIndianAdvantage from '../components/NordicIndianAdvantage';
import JoinSection from '../components/JoinJourney';
import TransparencySection from '../components/Transparency';
import FounderVision from '../components/FoundersVision';
import AboutCompany from '../components/CompanyOverview';
import HeroHeader from '../components/AboutHero';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | NordicAI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <HeroHeader />
        <AboutCompany />
        <OurPurpose />
        <FounderVision />
        <NordicIndianAdvantage />
        <TransparencySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;