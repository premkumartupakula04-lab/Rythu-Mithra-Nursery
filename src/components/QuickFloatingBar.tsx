import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

interface QuickFloatingBarProps {
  onEnquireClick: () => void;
}

export const QuickFloatingBar: React.FC<QuickFloatingBarProps> = ({ onEnquireClick }) => {
  return (
    <div
      id="mobile-floating-bar"
      className="fixed bottom-3 left-3 right-3 z-40 sm:hidden bg-stone-900/95 backdrop-blur-md rounded-2xl p-2 border border-emerald-800/60 shadow-2xl flex items-center justify-between gap-2"
    >
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-emerald-300" />
        <span>CALL {BUSINESS_INFO.phone}</span>
      </a>

      {/* WhatsApp / Enquire Button */}
      <button
        onClick={onEnquireClick}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4" />
        <span>ENQUIRE NOW</span>
      </button>
    </div>
  );
};
