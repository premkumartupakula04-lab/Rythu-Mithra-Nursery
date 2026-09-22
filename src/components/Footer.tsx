import React from 'react';
import { Phone, MessageSquare, MapPin, Sprout, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer id="main-footer" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Info (Mandated: Rythu Mithra Nursery, Tagline, Owner, Location, Contact) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mt-0.5">
                  CHILLI SEEDLING NURSERY
                </span>
              </div>
            </div>

            <p className="mt-4 text-base font-semibold text-emerald-300 italic">
              “{BUSINESS_INFO.heroHeading}”
            </p>

            <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {BUSINESS_INFO.tagline} • Supplying certified chilli seedlings (mirapa naru) to farming communities across Andhra Pradesh and Telangana.
            </p>

            {/* Owner Details */}
            <div className="mt-6 p-4 rounded-xl bg-stone-900/90 border border-stone-800 text-xs space-y-1.5">
              <div className="text-stone-400">
                <span className="font-semibold text-stone-200">Owner:</span>{' '}
                {BUSINESS_INFO.owner}
              </div>
              <div className="text-stone-400">
                <span className="font-semibold text-stone-200">Experience:</span>{' '}
                {BUSINESS_INFO.experience}
              </div>
              <div className="text-stone-400">
                <span className="font-semibold text-stone-200">Location:</span>{' '}
                {BUSINESS_INFO.location}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chilli Varieties & Direct Contact Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Direct Contact
            </h4>

            <div className="space-y-3">
              {/* Phone Icon Link */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">
                    Phone Call
                  </div>
                  <div className="text-sm font-bold text-white">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp Icon Link */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-green-900/80 text-green-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">
                    WhatsApp Message
                  </div>
                  <div className="text-sm font-bold text-white">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </a>

              {/* Location Icon Link */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800 text-white">
                <div className="w-9 h-9 rounded-lg bg-red-900/60 text-red-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">
                    Nursery Location
                  </div>
                  <div className="text-xs font-semibold text-stone-200">
                    Chandrapalem Mandal, AP, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p id="footer-copyright">
            © 2026 Rythu Mithra Nursery. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Built for Farmers of AP & Telangana with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-emerald-400 transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
