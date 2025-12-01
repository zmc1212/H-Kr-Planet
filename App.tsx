import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-retro-bg text-retro-white selection:bg-retro-orange selection:text-black flex flex-col font-mono relative">
        {/* Global CRT Effects */}
        <div className="crt-overlay"></div>
        <div className="noise-overlay"></div>
        
        <Navbar />
        <main className="flex-grow pt-[100px] md:pt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;