import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '核心技术', href: '/solutions' },
  { label: '关于我们', href: '/about' },
  { label: '未来视界', href: '/#showcase' }, // Anchor on home
  { label: '联系我们', href: '/#contact' },  // Anchor on home
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor links scrolling if on home page
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      // If not on home, the Link component handles the navigation to /, 
      // then we need a way to scroll (usually handled by a ScrollToTop or useEffect in Home)
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-glow blur-sm opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <Globe className="h-8 w-8 text-white relative z-10" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">
              H-Kr <span className="text-brand-glow">PLANET</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-sans text-sm font-medium transition-all duration-200 hover:scale-105 transform relative group ${
                    location.pathname === item.href ? 'text-brand-glow' : 'text-gray-300 hover:text-brand-glow'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-glow transition-all duration-300 group-hover:w-full ${location.pathname === item.href ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;