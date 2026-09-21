import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { COMPANY_CONTACT, constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'About Poulo Machinery | Air Jet & Water Jet Loom Supplier Surat',
  description:
    'Learn about Poulo Machinery, an India-side importer and supplier of high-speed Air Jet and Water Jet looms based in Surat, Gujarat.',
  path: '/about/',
});

export default function AboutPage() {
  const breadcrumbItems = [{ name: 'About', url: '/about/' }];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-blue-900/90 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
              <Building2 size={14} className="text-blue-400" />
              <span>Surat, Gujarat (India)</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Poulo Machinery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Poulo Machinery operates as an India-side supplier and commercial importer of advanced weaving machinery, providing textile mill owners with high-speed Air Jet and Water Jet loom systems.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY ROLE & MISSION */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Our Role in the Weaving Supply Chain</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Based in the textile hub of Surat, Gujarat, Poulo Machinery facilitates the supply of specialized weaving machinery sourced from Qingdao Jinxin Hejia Machinery Co., Ltd. (China).
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on matching mill production requirements—such as yarn type, reed width, shedding requirements, and target fabric output—with appropriately configured Air Jet (PL920) or Water Jet (PL5810) loom models.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-blue-900 block">Surat Commercial Office:</span>
              <p>
                Having a local point of contact in Gujarat enables direct communication, configuration review, and quotation assistance for Indian textile manufacturers.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 relative h-72 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <Image
              src="/images/about-factory.webp"
              alt="Poulo Machinery commercial operations reference"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VERIFIED COMPANY CONTACT INFO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Surat Office & Contact Details</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="w-8 h-8 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Office Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_CONTACT.address}
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <Phone size={18} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Direct Phone & WhatsApp</h3>
            <p className="text-xs text-slate-600">
              Contact Person: <strong>{COMPANY_CONTACT.contactPerson}</strong>
            </p>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-block text-xs font-semibold text-blue-700 hover:text-blue-900"
            >
              {COMPANY_CONTACT.phone}
            </a>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <Mail size={18} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Email Communication</h3>
            <p className="text-xs text-slate-600">
              Technical inquiries & Quotations:
            </p>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="inline-block text-xs font-semibold text-blue-700 hover:text-blue-900"
            >
              {COMPANY_CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">Ready to Discuss Your Weaving Requirements?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact Poulo Machinery for loom specifications, reed width options, and customized quotation details.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-6 py-3 rounded transition-colors"
            >
              <span>Go to Quotation Form</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

