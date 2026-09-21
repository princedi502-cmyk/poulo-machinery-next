import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Factory, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Manufacturing Partner in China | Qingdao Jinxin Hejia',
  description:
    'Learn about Qingdao Jinxin Hejia Machinery Co., Ltd., the China-based manufacturing partner producing Air Jet and Water Jet looms supplied in India by Poulo Machinery.',
  path: '/manufacturer-partner/',
});

export default function ManufacturerPartnerPage() {
  const breadcrumbItems = [{ name: 'Manufacturing Partner', url: '/manufacturer-partner/' }];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* PAGE HERO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-blue-900/90 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
              <Factory size={14} className="text-blue-400" />
              <span>China Manufacturing Partner</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Manufacturing Partner in China
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Poulo Machinery sources high-speed weaving loom systems from <strong>Qingdao Jinxin Hejia Machinery Co., Ltd.</strong>, a dedicated textile machinery manufacturer operating in Qingdao, Shandong Province, China.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLOSURE & BUSINESS ROLES */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-base border-b border-slate-100 pb-3">
            <ShieldCheck size={20} className="text-blue-700" />
            <span>Commercial Transparency & Supply Chain Roles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Poulo Machinery (Surat, India)</h3>
              <p>
                Serves as the India-side commercial importer, technical point of contact, and sales representative based in Surat, Gujarat. Poulo Machinery facilitates machine configuration discussions, quotation handling, and commercial coordination for Indian textile mills.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Qingdao Jinxin Hejia Machinery Co., Ltd. (China)</h3>
              <p>
                Serves as the China-side original equipment manufacturer (OEM). The Qingdao manufacturing facility executes loom frame casting, precision CNC machining, pump assembly, and factory testing prior to export shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY GALLERY & CAPTIONS */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Manufacturing Facility & Workshop Operations</h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Imagery from the Qingdao Jinxin Hejia production facility in Qingdao, China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photo 1 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm space-y-3">
            <div className="relative h-64 sm:h-72 bg-slate-100">
              <Image
                src="/images/poulo-machinery-factory-aerial-surat.webp"
                alt="Aerial view of Qingdao Jinxin Hejia factory complex in China"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block">Aerial Factory Overview:</strong>
              <span>Qingdao Jinxin Hejia Machinery main production facility complex in Qingdao, China.</span>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm space-y-3">
            <div className="relative h-64 sm:h-72 bg-slate-100">
              <Image
                src="/images/poulo-machinery-production-floor-surat.webp"
                alt="Qingdao Jinxin Hejia loom assembly workshop floor"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block">Assembly Floor Workshop:</strong>
              <span>Weaving loom assembly hall showing structured frame fitting and component testing at Qingdao, China.</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL MANUFACTURER WEBSITE LINK */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">Visit Qingdao Jinxin Hejia Official Portal</h3>
            <p className="text-xs text-slate-600 max-w-xl">
              For comprehensive global manufacturer updates, technical background, and global product context, visit Qingdao Jinxin Hejia’s official website.
            </p>
          </div>

          <a
            href="https://en.qdjinxinhejia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs px-6 py-3 rounded shadow-sm transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <span>Visit en.qdjinxinhejia.com</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 text-center space-y-4">
        <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-4 shadow-sm max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900">Discuss Loom Imports with Poulo Machinery</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Looking to import or configure Air Jet or Water Jet Looms for your Indian textile unit? Contact our Surat office for technical specifications and commercial quotes.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-6 py-3 rounded transition-colors"
          >
            <span>Contact Poulo Machinery Surat</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}

