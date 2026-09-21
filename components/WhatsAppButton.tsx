'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/seo';
import { trackEvent } from '@/lib/analytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent('whatsapp_click', { location: 'floating_button' });
  };

  return (
    <a
      href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hello%20Poulo%20Machinery,%20I%20am%20interested%20in%20your%20weaving%20looms.`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Contact Poulo Machinery on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
    >
      <MessageSquare size={24} className="fill-current" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}

