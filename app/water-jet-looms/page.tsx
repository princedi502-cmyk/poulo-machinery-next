import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Droplets, Gauge, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { constructMetadata } from '@/lib/seo';
import { PL5810_WATER_JET_LOOM } from '@/lib/specs';

export const metadata = constructMetadata({
  title: 'Water Jet Looms for High-Speed Weaving',
  description:
    'Explore Water Jet Looms supplied by Poulo Machinery in India. Engineered for high-speed synthetic filament, polyester, and lining fabric production.',
  path: '/water-jet-looms/',
});

export default function WaterJetCategoryPage() {
  const breadcrumbItems = [{ name: 'Water Jet Looms', url: '/water-jet-looms/' }];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* CATEGORY HERO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-cyan-900/90 text-cyan-300 border border-cyan-700/60 px-3 py-1 rounded text-xs font-semibold">
              Weaving Technology Category
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Water Jet Looms for High-Speed Weaving
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Water jet looms utilize a high-pressure water stream to carry hydrophobic filament weft yarns across the shed. Designed for high-volume synthetic fabric production with exceptional operating efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL EXPLAINER SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Understanding Water Jet Weaving Technology</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Water jet insertion relies on high-density ceramic pump plungers to force a precise volume of pressurized water through a tiny nozzle orifice. Because water has higher mass density than air, it carries hydrophobic filament yarns across the warp shed with minimal drag and exceptional velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-cyan-50 text-cyan-700 rounded flex items-center justify-center">
              <Droplets size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">High Hydrophobic Efficiency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ideal for non-water-absorbing synthetic filaments (polyester, nylon, acrylic). Water droplets separate cleanly from the fabric without damaging yarn filament structure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-cyan-50 text-cyan-700 rounded flex items-center justify-center">
              <Gauge size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">High Speed Potential</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engineered for maximum operating speeds up to 1100 RPM design maximum, offering excellent output metrics per square meter of factory floor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-cyan-50 text-cyan-700 rounded flex items-center justify-center">
              <ShieldAlert size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Corrosion Resistant Construction</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Features stainless steel water collection trays, anti-corrosion bearings, and sealed electrical components to prevent moisture degradation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WATER JET MODEL: PL5810 */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Featured Water Jet Model</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          <div className="lg:col-span-5 relative min-h-[250px] bg-slate-100 rounded overflow-hidden">
            <Image
              src="/images/water-jet-loom-poulo-machinery-surat.webp"
              alt="PL5810 High Speed Water Jet Loom"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block bg-cyan-100 text-cyan-800 text-xs font-bold px-2.5 py-1 rounded uppercase">
                Model PL5810
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{PL5810_WATER_JET_LOOM.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {PL5810_WATER_JET_LOOM.tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded border border-slate-100">
                <div>
                  <span className="text-slate-500 block">Optional Reed Width:</span>
                  <span className="font-semibold text-slate-800">150 cm to 380 cm</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Design Maximum Speed:</span>
                  <span className="font-semibold text-slate-800">Up to 1100 RPM</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Weft Selection:</span>
                  <span className="font-semibold text-slate-800">1 to 6 Jet Free Selection</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Shedding Options:</span>
                  <span className="font-semibold text-slate-800">Crank, Cam, Dobby, Jacquard</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/water-jet-looms/pl5810/"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs px-6 py-3 rounded transition-colors"
              >
                <span>View Full Technical Specifications & Configuration</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="max-w-[1280px] mx-auto px-4">
        <QuoteForm initialMachineInterest="water-jet" />
      </section>
    </div>
  );
}

