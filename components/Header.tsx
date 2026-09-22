'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/seo';
import { trackEvent } from '@/lib/analytics';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (label: string) => {
    setMobileMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackEvent('quote_click', { location: 'header_button' });
    setMobileMenuOpen(false);
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'top_bar' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'top_bar' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-300">Surat, Gujarat (India)</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              onClick={handlePhoneClick}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone size={12} className="text-blue-400" />
              <span>{COMPANY_CONTACT.phone} ({COMPANY_CONTACT.contactPerson})</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hello%20Poulo%20Machinery,%20I%20am%20interested%20in%20your%20weaving%20looms.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp Us</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">Importer & Supplier in India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/poulo-logo.webp"
            alt="Poulo Machinery"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover ring-1 ring-blue-600/15"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-800">
          <Link
            href="/air-jet-looms/"
            onClick={() => handleNavClick('Air Jet Looms')}
            className="hover:text-blue-700 transition-colors py-1"
          >
            Air Jet Looms
          </Link>
          <Link
            href="/water-jet-looms/"
            onClick={() => handleNavClick('Water Jet Looms')}
            className="hover:text-blue-700 transition-colors py-1"
          >
            Water Jet Looms
          </Link>
          <Link
            href="/manufacturer-partner/"
            onClick={() => handleNavClick('Manufacturing Partner')}
            className="hover:text-blue-700 transition-colors py-1"
          >
            Manufacturing Partner
          </Link>
          <Link
            href="/about/"
            onClick={() => handleNavClick('About')}
            className="hover:text-blue-700 transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="/contact/"
            onClick={() => handleNavClick('Contact')}
            className="hover:text-blue-700 transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact/"
            onClick={handleQuoteClick}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-md shadow-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="lg:hidden p-2 text-slate-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <Link
              href="/"
              onClick={() => handleNavClick('Home')}
              className="hover:text-blue-700 py-1"
            >
              Home
            </Link>
            <Link
              href="/air-jet-looms/"
              onClick={() => handleNavClick('Air Jet Looms')}
              className="hover:text-blue-700 py-1"
            >
              Air Jet Looms
            </Link>
            <Link
              href="/water-jet-looms/"
              onClick={() => handleNavClick('Water Jet Looms')}
              className="hover:text-blue-700 py-1"
            >
              Water Jet Looms
            </Link>
            <Link
              href="/manufacturer-partner/"
              onClick={() => handleNavClick('Manufacturing Partner')}
              className="hover:text-blue-700 py-1"
            >
              Manufacturing Partner
            </Link>
            <Link
              href="/about/"
              onClick={() => handleNavClick('About')}
              className="hover:text-blue-700 py-1"
            >
              About Poulo Machinery
            </Link>
            <Link
              href="/contact/"
              onClick={() => handleNavClick('Contact')}
              className="hover:text-blue-700 py-1"
            >
              Contact Us
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact/"
              onClick={handleQuoteClick}
              className="w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-md shadow-sm transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hello%20Poulo%20Machinery,%20I%20am%20interested%20in%20your%20weaving%20looms.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Sales Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

