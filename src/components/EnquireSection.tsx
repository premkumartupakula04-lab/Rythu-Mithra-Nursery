import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Sprout, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, CHILLI_VARIETIES } from '../data/nurseryData';
import { EnquiryData } from '../types';

interface EnquireSectionProps {
  initialVariety?: string;
}

export const EnquireSection: React.FC<EnquireSectionProps> = ({ initialVariety }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    fullName: '',
    phoneNumber: '',
    location: '',
    variety: initialVariety || '2282',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialVariety) {
      setFormData((prev) => ({ ...prev, variety: initialVariety }));
    }
  }, [initialVariety]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }

    // Compose formatted message for WhatsApp direct sending
    const text = encodeURIComponent(
      `*Chilli Seedling Enquiry - Rythu Mithra Nursery*\n` +
        `• *Name:* ${formData.fullName}\n` +
        `• *Phone:* ${formData.phoneNumber}\n` +
        `• *Village/Location:* ${formData.location || 'Not specified'}\n` +
        `• *Chilli Variety:* ${formData.variety}\n` +
        `• *Quantity/Trays Required:* ${formData.quantity || 'To be discussed'}\n` +
        (formData.message ? `• *Message:* ${formData.message}\n` : '') +
        `\n_Sent via Rythu Mithra Nursery Website_`
    );

    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${text}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquire" className="py-20 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-red-600" />
            <span>DIRECT FARMER BOOKINGS</span>
          </div>

          <h2
            id="enquire-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Enquire About Chilli Seedlings
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Send your seedling requirement directly to Rythu Mithra Nursery via WhatsApp or telephone at{' '}
            <strong className="text-stone-900">{BUSINESS_INFO.phone}</strong>.
          </p>
        </div>

        {/* Enquiry Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                Thank You for Your Enquiry!
              </h3>
              <p className="mt-2 text-sm text-stone-600 max-w-md mx-auto">
                Your details have been forwarded to Rythu Mithra Nursery on WhatsApp ({BUSINESS_INFO.phone}). We will contact you promptly regarding seedling availability and schedule.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone} Directly</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="chilli-enquiry-form" className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs font-semibold text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name (e.g. Ramesh Reddy)"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Location / Village */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Location / Village
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Village, Mandal, District"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Chilli Variety Dropdown */}
                <div>
                  <label
                    htmlFor="variety"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Chilli Variety <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="variety"
                    name="variety"
                    value={formData.variety}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-medium"
                  >
                    {CHILLI_VARIETIES.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name}
                      </option>
                    ))}
                    <option value="General Consultation">Other / General Consultation</option>
                  </select>
                </div>

                {/* Quantity Required */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Number of trays / seedlings / acres"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Message / Sowing Timeline
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your planned sowing dates or specific delivery requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                ></textarea>
              </div>

              {/* Form Action Button (Mandated: "SEND ENQUIRY") */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="send-enquiry-btn"
                  className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-red-600/40 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND ENQUIRY</span>
                </button>
              </div>

              {/* Help & Direct Contact notice */}
              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
                <span>Sends pre-formatted enquiry directly via WhatsApp.</span>
                <span className="font-semibold text-stone-700">
                  Direct Line: {BUSINESS_INFO.phone}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
