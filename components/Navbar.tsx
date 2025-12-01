import React, { useState } from 'react';
import { Menu, X, Disc, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'TECH_STACK', href: '/solutions' },
  { label: 'DATABASE', href: '/about' },
  { label: 'VISUALS', href: '/#showcase' },
  { label: 'COMM_LINK', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Top Marquee Bar */}
      <div className="bg-retro-orange text-black py-1 overflow-hidden border-b-2 border-black">
        <div className="whitespace-nowrap animate-scan flex space-x-8 text-xs font-bold tracking-widest">
           {[...Array(10)].map((_, i) => (
             <span key={i}>// SYSTEM ONLINE // CONNECTED TO H-Kr NET // LATENCY: 12ms // MEMORY: 64TB OK // </span>
           ))}
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-retro-bg/95 border-b-2 border-retro-gray backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Area */}
            <Link to="/" className="flex items-center space-x-3 group cursor-pointer border-2 border-retro-gray p-2 hover:border-retro-orange transition-colors bg-black">
              <Disc className="h-6 w-6 text-retro-orange animate-spin-slow" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-tighter text-white">
                  H-Kr <span className="text-retro-orange">PLANET</span>
                </span>
                <span className="text-[10px] text-retro-gray font-mono tracking-widest">DIGITAL TWIN CORP</span>
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      px-4 py-2 text-sm font-bold tracking-wider border border-transparent hover:border-retro-orange hover:bg-retro-surface hover:text-retro-orange transition-all
                      ${location.pathname === item.href ? 'bg-retro-orange text-black hover:bg-retro-orange hover:text-black' : 'text-retro-white'}
                    `}
                  >
                    [{item.label}]
                  </Link>
                ))}
              </div>
            </div>

            {/* Status Indicator (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 border-l-2 border-retro-gray pl-6">
               <div className="flex flex-col items-end">
                  <span className="text-[10px] text-retro-gray">SYS_STATUS</span>
                  <div className="flex items-center text-retro-green text-xs font-bold">
                    <Activity className="w-3 h-3 mr-1 animate-pulse" /> ONLINE
                  </div>
               </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-retro-surface p-2 border border-retro-gray text-retro-orange hover:bg-retro-orange hover:text-black transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-retro-bg border-b-2 border-retro-orange absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block px-3 py-4 text-base font-bold text-retro-white hover:bg-retro-orange hover:text-black border-l-4 border-transparent hover:border-black transition-all"
              >
                {'>'} {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;