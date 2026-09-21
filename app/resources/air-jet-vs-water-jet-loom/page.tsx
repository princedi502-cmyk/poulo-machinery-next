import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Wind, Droplets } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Air Jet vs Water Jet Loom Comparison Guide | Poulo Machinery',
  description:
    'Comprehensive technical comparison between Air Jet and Water Jet looms. Compare insertion medium, yarn suitability, speed, energy consumption, and fabric applications.',
  path: '/resources/air-jet-vs-water-jet-loom/',
});

export default function ComparisonGuidePage() {
  const breadcrumbItems = [
    { name: 'Resources', url: '/resources/air-jet-vs-water-jet-loom/' },
    { name: 'Air Jet vs Water Jet Loom Guide', url: '/resources/air-jet-vs-water-jet-loom/' },
  ];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* GUIDE HERO */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block bg-blue-900/90 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
              Technical Weaving Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Air Jet vs Water Jet Loom: Technical Selection Guide
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Choosing between air jet and water jet weaving machinery depends primarily on yarn absorption properties, fabric construction, energy infrastructure, and target production volume.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON SUMMARY TABLE */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Side-by-Side Parameter Comparison</h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Technical decision matrix for textile mill managers evaluating shuttleless loom investments.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th className="p-4 font-bold">Feature / Factor</th>
                <th className="p-4 font-bold text-blue-800">Air Jet Loom (PL920)</th>
                <th className="p-4 font-bold text-cyan-800">Water Jet Loom (PL5810)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Weft Insertion Medium</td>
                <td className="p-4">Compressed air pulses (Main + Relay nozzles)</td>
                <td className="p-4">High-pressure water jet stream (Ceramic pump)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Yarn Suitability</td>
                <td className="p-4">Cotton, spun yarn, viscose, wool, filament, blends</td>
                <td className="p-4">Hydrophobic filaments only (polyester, nylon, acrylic)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Target Fabric Applications</td>
                <td className="p-4">Shirting, sheeting, denim, bottom weight, suitings</td>
                <td className="p-4">Lining fabric, taffeta, umbrella cloth, synthetic satin</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Weft Color Capabilities</td>
                <td className="p-4">Up to 2, 4, or 6-color arbitrary pattern switching</td>
                <td className="p-4">1 to 6 jet electronic free selection</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Utility Requirements</td>
                <td className="p-4">Air compressor plant + electrical power</td>
                <td className="p-4">Deionized water supply + drainage + electrical power</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900 bg-slate-50">Loom Speed Potential</td>
                <td className="p-4">High speed (typically 600–1000+ RPM depending on width)</td>
                <td className="p-4">Ultra-high speed (up to 1100 RPM design max)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DETAILED ANALYSIS SECTIONS */}
      <section className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Air Jet Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-lg border-b border-slate-100 pb-3">
            <Wind size={22} className="text-blue-700" />
            <span>Air Jet Weaving Advantage</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Air jet looms offer unmatched versatility across natural fibers and spun yarns. Because air does not wet the warp or weft, hydrophilic fibers like cotton, modal, and viscose can be woven at high speed without distortion or mildew risk.
          </p>

          <ul className="text-xs text-slate-700 space-y-2 pt-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-700 shrink-0 mt-0.5" />
              <span><strong>Versatile Yarn Compatibility:</strong> Accommodates 100s to 5s short staple yarn and 50D to 900D filament.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-700 shrink-0 mt-0.5" />
              <span><strong>Complex Patterning:</strong> Supports Cam, Dobby, and Electronic Jacquard heads.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/air-jet-looms/pl920/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900"
            >
              <span>Explore PL920 Air Jet Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Water Jet Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-cyan-800 font-bold text-lg border-b border-slate-100 pb-3">
            <Droplets size={22} className="text-cyan-700" />
            <span>Water Jet Weaving Advantage</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Water jet looms represent the lowest energy consumption per meter woven when working exclusively with synthetic filament yarns. Water provides smooth momentum transfer without requiring expensive continuous compressed air volume.
          </p>

          <ul className="text-xs text-slate-700 space-y-2 pt-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-cyan-700 shrink-0 mt-0.5" />
              <span><strong>Maximum Speed Metrics:</strong> Achieves design speeds up to 1100 RPM on continuous synthetic filaments.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-cyan-700 shrink-0 mt-0.5" />
              <span><strong>Low Energy Per Pick:</strong> Highly economical electrical operating cost for polyester taffeta and lining weaving.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/water-jet-looms/pl5810/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 hover:text-cyan-900"
            >
              <span>Explore PL5810 Water Jet Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="max-w-[1280px] mx-auto px-4">
        <QuoteForm />
      </section>
    </div>
  );
}

