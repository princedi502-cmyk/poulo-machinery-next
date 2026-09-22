import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { COMPANY_CONTACT, constructMetadata } from '@/lib/seo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons';

export const metadata = constructMetadata({
  title: 'Contact Us & Request a Quote | Poulo Machinery Surat',
  description:
    'Contact Poulo Machinery in Surat, Gujarat for Air Jet & Water Jet Loom price quotes, technical specifications, and machine configuration discussions.',
  path: '/contact/',
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: 'Contact', url: '/contact/' }];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO & QUICK ACTIONS */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 border border-slate-800 space-y-4">
          <span className="inline-block bg-blue-900/90 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
            Sales & Technical Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact Poulo Machinery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Get in touch with our team in Surat, Gujarat for technical loom specifications, machine configurations, and quotation requests.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs font-semibold">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded shadow-sm transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call {COMPANY_CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hello%20Poulo%20Machinery,%20I%20am%20interested%20in%20your%20weaving%20looms.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded shadow-sm transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Sales Chat</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-2.5 rounded transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FORM & ADDRESS GRID */}
      <section className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Quote Form */}
        <div className="lg:col-span-8">
          <QuoteForm />
        </div>

        {/* Address & Business Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">Surat Commercial Office</h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Address:</strong>
                  <span>{COMPANY_CONTACT.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Phone / WhatsApp:</strong>
                  <span>{COMPANY_CONTACT.phone} ({COMPANY_CONTACT.contactPerson})</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Email:</strong>
                  <span>{COMPANY_CONTACT.email}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <strong className="text-slate-900 text-xs block font-semibold uppercase tracking-wider text-slate-500">
                Follow Us
              </strong>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Poulo Machinery on Instagram"
                  className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONTACT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Poulo Machinery on Facebook"
                  className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <span className="text-xs font-medium text-slate-500">{COMPANY_CONTACT.social.handle}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 space-y-2 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 text-sm">Working & Inquiry Hours</h4>
            <p>Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
            <p>Inquiries received outside business hours will be addressed on the following business day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

