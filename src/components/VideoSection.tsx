import React from 'react';
import { PlayCircle, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';
import fieldVideo from '../assets/video/rythu-mithra-field-video.mp4';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/70 border border-emerald-500/30 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4" />
            Real Field Video
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Our Field & Nursery Video</h2>
          <p className="mt-3 text-stone-300">
            A real video supplied for the Rythu Mithra Nursery website.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-emerald-800/60 bg-black shadow-2xl">
          <video
            controls
            playsInline
            preload="metadata"
            poster={undefined}
            className="w-full aspect-video object-contain bg-black"
          >
            <source src={fieldVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Featured speaker</p>
            <h3 className="mt-2 text-xl font-bold">Meera Hussain</h3>
            <p className="mt-1 text-sm text-stone-300">Senior Area Manager – Sakata Seeds</p>
            <p className="mt-3 text-sm text-stone-400">
              “My name is Meera Hussain, and I work as a Senior Area Manager at Sakata Seeds.”
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Rythu Mithra Nursery</p>
            <h3 className="mt-2 text-xl font-bold">Chilli Seedlings / Mirapa Naru</h3>
            <p className="mt-1 text-sm text-stone-300">Serving farmers across Andhra Pradesh & Telangana.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-bold hover:bg-emerald-600">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold hover:bg-red-500">
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
