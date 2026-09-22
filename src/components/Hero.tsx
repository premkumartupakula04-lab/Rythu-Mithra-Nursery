import React from 'react';
import { Phone, MessageSquare, Award, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/nurseryData';

interface HeroProps {
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Rythu Mithra Nursery chilli seedling trays and green agricultural field"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multi-stage dark overlays for optimal typography contrast */}
        <div className="absolute inset-0 bg-stone-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <div
          id="hero-trust-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-lg"
        >
          <Award className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>10+ Years of Nursery Experience</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-emerald-300 font-normal hidden sm:inline">
            Chandrapalem Mandal, AP
          </span>
        </div>

        {/* Nursery Name Identifier */}
        <div className="text-xs sm:text-sm uppercase tracking-[0.25em] font-extrabold text-red-400 mb-2">
          {BUSINESS_INFO.name}
        </div>

        {/* Main Heading */}
        <h1
          id="hero-main-heading"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl drop-shadow-md"
        >
          {BUSINESS_INFO.heroHeading}
        </h1>

        {/* Subheading */}
        <p
          id="hero-subheading"
          className="mt-4 sm:mt-6 text-lg sm:text-2xl font-semibold text-emerald-300 tracking-wide max-w-3xl"
        >
          {BUSINESS_INFO.tagline}
        </p>

        {/* Additional Explanatory Text */}
        <p
          id="hero-additional-text"
          className="mt-4 text-sm sm:text-lg text-stone-200/90 max-w-2xl leading-relaxed"
        >
          {BUSINESS_INFO.additionalHeroText}
        </p>

        {/* Core Pillars Quick Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Chilli Seedlings / Mirapa Naru</span>
          </div>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sakata Varieties</span>
          </div>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>AP & Telangana Delivery</span>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onEnquireClick}
            id="hero-enquire-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 shadow-xl hover:shadow-red-600/40 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>ENQUIRE NOW</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="hero-call-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-800/90 hover:bg-emerald-700 border border-emerald-500/40 backdrop-blur-md shadow-xl active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 text-emerald-300" />
            <span>CALL NOW: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center text-stone-400 hover:text-emerald-300 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold mb-1">
            Discover Our Nursery
          </span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
