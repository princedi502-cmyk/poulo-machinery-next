import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Wind, Cpu, Sliders } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { constructMetadata } from '@/lib/seo';
import { PL920_AIR_JET_LOOM } from '@/lib/specs';

export const metadata = constructMetadata({
  title: 'Air Jet Looms for High-Speed Textile Weaving',
  description:
    'Explore Air Jet Looms supplied by Poulo Machinery in India. Learn about high-speed compressed air weft insertion, reed width options, and PL920 specifications.',
  path: '/air-jet-looms/',
});

export default function AirJetCategoryPage() {
  const breadcrumbItems = [{ name: 'Air Jet Looms', url: '/air-jet-looms/' }];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* CATEGORY HERO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-blue-900/90 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
              Weaving Technology Category
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Air Jet Looms for High-Speed Textile Weaving
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Air jet looms utilize high-pressure compressed air pulses to propel weft yarn through the warp shed at exceptional insertion speeds. Engineered for cotton, spun yarn, shirting, denim, and blended fabric manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL EXPLAINER SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Understanding Air Jet Weaving Technology</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            In air jet weaving, weft insertion is driven by a main nozzle that accelerates the yarn into the profile reed tunnel. Auxiliary sub-nozzles positioned along the reed length provide relay air jets to maintain yarn velocity across wide reed widths without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <Wind size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Air Insertion Dynamics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dual main nozzles combined with relay sub-nozzles provide high insertion rate while minimizing peak compressed air consumption per pick.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Electronic Control & Sensing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrated optical weft feelers monitor yarn arrival timing in real time, preventing broken picks and stopping the loom instantly upon weft exhaustion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center">
              <Sliders size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Shedding Flexibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Available with positive cam shedding (up to 8 heald frames), electronic dobby (16 frames), or electronic jacquard for intricate patterned fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED AIR JET MODEL: PL920 */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Featured Air Jet Model</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          <div className="lg:col-span-5 relative min-h-[250px] bg-slate-100 rounded overflow-hidden">
            <Image
              src="/images/air-jet-loom-poulo-machinery-surat.webp"
              alt="PL920 High Speed Air Jet Loom"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded uppercase">
                Model PL920
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{PL920_AIR_JET_LOOM.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {PL920_AIR_JET_LOOM.tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded border border-slate-100">
                <div>
                  <span className="text-slate-500 block">Reed Width Options:</span>
                  <span className="font-semibold text-slate-800">190, 210, 230, 250, 280, 340, 360 cm</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Short Staple Yarn Range:</span>
                  <span className="font-semibold text-slate-800">100s to 5s</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Shedding Motions:</span>
                  <span className="font-semibold text-slate-800">Crank, Cam (8 frames), Dobby (16), Jacquard</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Tension Control:</span>
                  <span className="font-semibold text-slate-800">Electronic Let-off (ELO)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/air-jet-looms/pl920/"
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
        <QuoteForm initialMachineInterest="air-jet" />
      </section>
    </div>
  );
}

