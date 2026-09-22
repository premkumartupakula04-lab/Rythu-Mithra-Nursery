import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VarietiesSection } from './components/VarietiesSection';
import { ProcessSection } from './components/ProcessSection';
import { FarmersSection } from './components/FarmersSection';
import { NurserySection } from './components/NurserySection';
import { FieldSection } from './components/FieldSection';
import { VideoSection } from './components/VideoSection';
import { GallerySection } from './components/GallerySection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { EnquireSection } from './components/EnquireSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuickFloatingBar } from './components/QuickFloatingBar';
import { GalleryItem } from './types';

export default function App() {
  const [selectedVariety, setSelectedVariety] = useState<string | undefined>(undefined);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxItems, setLightboxItems] = useState<
    Array<{ image: string; title?: string; alt?: string; caption?: string }>
  >([]);

  // Scroll to Enquire section and set prefilled variety if provided
  const handleEnquireClick = (varietyName?: string) => {
    if (varietyName) {
      setSelectedVariety(varietyName);
    }
    const element = document.getElementById('enquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Lightbox for single image
  const handleOpenSingleImage = (img: string, title: string) => {
    setLightboxItems([{ image: img, title, alt: title, caption: title }]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  // Open Lightbox for gallery collection
  const handleOpenGalleryIndex = (index: number, items: GalleryItem[]) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* 1. Sticky Responsive Navbar */}
      <Navbar onEnquireClick={() => handleEnquireClick()} />

      <main className="flex-1">
        {/* 2. Full-Screen Hero Section */}
        <Hero onEnquireClick={() => handleEnquireClick()} />

        {/* 3. About Rythu Mithra Nursery */}
        <AboutSection onOpenImage={handleOpenSingleImage} />

        {/* 4. Our Chilli Varieties (Sakata 2282, Sakata HY-1191, Sakata 2433, Sakata 0748) */}
        <VarietiesSection
          onEnquireClick={handleEnquireClick}
          onOpenImage={handleOpenSingleImage}
        />

        {/* 5. Nursery Process (01 SEED -> 02 GROWING -> 03 QUALITY CHECK -> 04 READY SEEDLINGS) */}
        <ProcessSection onOpenImage={handleOpenSingleImage} />

        {/* 6. Our Happy Farmers – 10 Real Photos */}
        <FarmersSection onOpenImage={handleOpenSingleImage} />

        {/* 7. Our Nursery */}
        <NurserySection onOpenImage={handleOpenSingleImage} />

        {/* 8. From Nursery to Field */}
        <FieldSection onOpenImage={handleOpenSingleImage} />

        {/* 9. Video – Meera Hussain, Senior Area Manager – Sakata */}
        <VideoSection />

        {/* 10. Complete Gallery with Filters */}
        <GallerySection onOpenLightboxIndex={handleOpenGalleryIndex} />

        {/* 11. Service Area – AP & Telangana */}
        <ServiceAreaSection />

        {/* 12. Enquire Now Form */}
        <EnquireSection initialVariety={selectedVariety} />

        {/* 13. Contact Us + Google Map */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Mobile Floating Quick Action Bar */}
      <QuickFloatingBar onEnquireClick={() => handleEnquireClick()} />

      {/* Full-screen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={lightboxIndex}
        items={lightboxItems}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
