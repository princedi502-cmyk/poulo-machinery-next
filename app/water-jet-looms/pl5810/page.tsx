import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SpecTable from '@/components/SpecTable';
import QuoteForm from '@/components/QuoteForm';
import { constructMetadata, getProductSchema } from '@/lib/seo';
import { PL5810_WATER_JET_LOOM, PL920_AIR_JET_LOOM } from '@/lib/specs';

export const metadata = constructMetadata({
  title: 'PL5810 High-Speed Water Jet Loom | Specifications & Configuration',
  description:
    'Detailed technical specifications for PL5810 High-Speed Water Jet Loom. Features 150-380cm reed widths, up to 1100 RPM design speed, 1-6 jet weft selection, and anti-corrosion components.',
  path: '/water-jet-looms/pl5810/',
});

export default function PL5810Page() {
  const model = PL5810_WATER_JET_LOOM;
  const breadcrumbItems = [
    { name: 'Water Jet Looms', url: '/water-jet-looms/' },
    { name: 'PL5810 Water Jet Loom', url: '/water-jet-looms/pl5810/' },
  ];

  const productSchema = getProductSchema({
    name: model.name,
    description: model.tagline,
    image: model.heroImage,
    id: model.id,
    type: model.type,
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Product JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* PRODUCT HEADER & OVERVIEW */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Gallery / Images */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <Image
                src={model.heroImage}
                alt={model.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {model.galleryImages.map((img, idx) => (
                <div key={idx} className="relative h-20 rounded border border-slate-200 overflow-hidden bg-slate-100">
                  <Image
                    src={img}
                    alt={`${model.name} detail shot ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Model Summary & Specs Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                Water Jet Weaving System
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                {model.name}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                {model.tagline}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold border-b border-slate-200 pb-2">
                <ShieldCheck size={16} className="text-blue-700" />
                <span>Source & Supply Chain Note</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Manufactured by <strong>Qingdao Jinxin Hejia Machinery Co., Ltd.</strong> (China) and supplied in India by <strong>Poulo Machinery</strong> (Surat, Gujarat).
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Key System Advantages:</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {model.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-cyan-700 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#quote-form"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs px-6 py-3 rounded shadow-sm transition-colors"
              >
                Request PL5810 Price Quote
              </a>
              <a
                href="#specifications"
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs px-6 py-3 rounded transition-colors"
              >
                View Full Spec Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW DETAILS */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Machine Overview & Operating Scope</h2>
          <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
            {model.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATION TABLE */}
      <section id="specifications" className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Catalogue Data</span>
          <h2 className="text-2xl font-bold text-slate-900">PL5810 Technical Specifications</h2>
        </div>

        <SpecTable
          categories={model.specCategories}
          configurationNotice={model.configurationNotice}
        />
      </section>

      {/* MAJOR SYSTEMS / ANATOMY */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Engineering Anatomy</span>
          <h2 className="text-2xl font-bold text-slate-900">PL5810 Major Operating Subsystems</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {model.majorSystems.map((sys, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 space-y-2 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base text-cyan-800">{sys.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{sys.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Related Weaving Machinery</h2>
          <Link href="/air-jet-looms/" className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
            <span>Explore Air Jet Looms</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xs font-bold text-blue-800 uppercase">Cotton & Spun Weaving</span>
            <h3 className="text-lg font-bold text-slate-900">{PL920_AIR_JET_LOOM.name}</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              High-speed compressed air insertion for fine cotton, shirting, and denim fabrics.
            </p>
          </div>
          <Link
            href="/air-jet-looms/pl920/"
            className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-5 py-2.5 rounded shrink-0 transition-colors"
          >
            View PL920 Specs
          </Link>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="max-w-[1280px] mx-auto px-4">
        <QuoteForm initialMachineInterest="water-jet" />
      </section>
    </div>
  );
}

