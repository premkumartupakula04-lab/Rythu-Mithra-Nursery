import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Sprout } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

interface NavbarProps {
  onEnquireClick: (varietyName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Varieties', href: '#varieties' },
    { name: 'Nursery', href: '#nursery' },
    { name: 'Farmers', href: '#farmers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Video', href: '#video' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-xl border-b border-emerald-800/40'
          : 'bg-stone-900/80 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-md border border-emerald-400/30 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
                RYTHU MITHRA
              </span>
              <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mt-0.5">
                NURSERY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-200 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="nav-call-btn"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onEnquireClick()}
              id="nav-enquire-btn"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-red-600/30 active:scale-95 transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onEnquireClick()}
              className="sm:hidden px-2.5 py-1.5 rounded-md text-xs uppercase font-bold text-white bg-red-600 active:scale-95"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-200 hover:text-white bg-stone-800/80 border border-stone-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-stone-200 hover:text-white hover:bg-emerald-900/30 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <div className="text-xs text-stone-400">
              Chandrapalem Mandal, Andhra Pradesh
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
