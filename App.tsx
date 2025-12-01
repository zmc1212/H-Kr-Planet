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
      <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-glow selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
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