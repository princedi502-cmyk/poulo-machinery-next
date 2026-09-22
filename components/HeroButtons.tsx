'use client';

import React, { useState } from 'react';
import { ArrowRight, Download, Loader2 } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/seo';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function HeroButtons() {
  const [downloading, setDownloading] = useState(false);

  const handleScrollToModels = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('product-families');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#product-families');
    }
  };

  const handleDownloadBrochure = async () => {
    try {
      setDownloading(true);
      const { downloadBrochure } = await import('@/lib/pdf');
      downloadBrochure();
    } catch (error) {
      console.error('Failed to download brochure:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <a
        href="#product-families"
        onClick={handleScrollToModels}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded shadow-md transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span>View Loom Models</span>
        <ArrowRight size={16} />
      </a>
      <button
        type="button"
        onClick={handleDownloadBrochure}
        disabled={downloading}
        className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm px-6 py-3 rounded transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-75"
        aria-label="Download POULO Machinery Brochure PDF"
      >
        {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
        <span>{downloading ? 'Preparing PDF...' : 'Download Brochure'}</span>
      </button>
      <a
        href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hello%20Poulo%20Machinery,%20I%20am%20interested%20in%20your%20weaving%20looms.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-5 py-3 rounded transition-colors flex items-center gap-2"
      >
        <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}

