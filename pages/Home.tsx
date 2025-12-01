import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;