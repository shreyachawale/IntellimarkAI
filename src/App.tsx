import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Footer from './components/Footer';
import OfferCard from './components/OfferCard';
import Offers from './components/Offers';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Offers />
      <CaseStudy />
      <Clients />
      <HowItWorks />
      <Team />
      <Footer />
    </div>
  );
}

export default App;