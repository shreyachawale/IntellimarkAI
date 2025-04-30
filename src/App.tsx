import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Footer from './components/Footer';
import Offers from './components/Offers';
import CaseStudy from './components/CaseStudy';
import About from './pages/About' // <-- Your new About page

// Homepage as a component
const Home = () => (
  <>
    <Hero />
    <Services />
    <Offers />
    <CaseStudy />
    <Clients />
    <HowItWorks />
    <Team />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* You can add more routes like /services, /contact, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;