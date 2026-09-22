import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Clock, User, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>REACH US DIRECTLY</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Contact Rythu Mithra Nursery
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            For seedling availability, booking dates, tray orders, or nursery visits, connect directly with nursery owner Khakmuri Venkata Reddy.
          </p>
        </div>

        {/* Contact Info Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (Mandated: Call, WhatsApp, Location) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Call Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    📞 Direct Call
                  </span>
                  <div className="text-2xl font-black text-stone-900 mt-1">
                    {BUSINESS_INFO.phone}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Direct communication with nursery owner Khakmuri Venkata Reddy.
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    id="contact-call-btn"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL NOW</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    💬 WhatsApp Chat
                  </span>
                  <div className="text-2xl font-black text-stone-900 mt-1">
                    {BUSINESS_INFO.phone}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Send tray requirements or ask questions anytime on WhatsApp.
                  </p>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-whatsapp-btn"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-red-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    📍 Location
                  </span>
                  <div className="text-lg font-bold text-stone-900 mt-1">
                    {BUSINESS_INFO.location}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Chandrapalem Mandal, Andhra Pradesh, India.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="https://maps.google.com/?q=Chandrapalem+Andhra+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-directions-btn"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>GET DIRECTIONS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Nursery Hours & Owner Card */}
            <div className="p-4 rounded-xl bg-stone-200/60 border border-stone-200 text-xs text-stone-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-stone-800">
                  Owner: Khakmuri Venkata Reddy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Nursery Operations: 6:00 AM – 7:30 PM (All Days)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Area (Placeholder map centered on Chandrapalem Mandal) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col h-full">
              <div className="p-5 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-stone-50/70">
                <div>
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span>Nursery Map Location</span>
                  </h3>
                  <p className="text-xs text-stone-500">
                    Chandrapalem Mandal, Andhra Pradesh, India
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=Chandrapalem+Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Embed Container (Chandrapalem, Andhra Pradesh) */}
              <div className="relative w-full h-80 sm:h-96 bg-stone-100">
                <iframe
                  title="Rythu Mithra Nursery Location - Chandrapalem Mandal"
                  src="https://maps.google.com/maps?q=Chandrapalem,Andhra%20Pradesh,India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Map Pin Label Overlay */}
                <div className="absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/20 shadow-lg pointer-events-none max-w-xs">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                    Rythu Mithra Nursery
                  </div>
                  <div className="text-xs font-medium text-stone-200">
                    Chandrapalem Mandal, Andhra Pradesh
                  </div>
                </div>
              </div>

              {/* Map Footer Action Buttons (Mandated: CALL NOW, WHATSAPP, GET DIRECTIONS) */}
              <div className="p-4 bg-white border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-stone-500">
                  Visitors and farmers are welcome to inspect seedlings in person.
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="px-3.5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                  >
                    CALL NOW
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-green-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-green-700 transition-colors"
                  >
                    WHATSAPP
                  </a>
                  <a
                    href="https://maps.google.com/?q=Chandrapalem+Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
