import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Phone, Mail } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import HeroButtons from '@/components/HeroButtons';
import HeroImageSlider from '@/components/HeroImageSlider';
import { COMPANY_CONTACT, constructMetadata } from '@/lib/seo';
import { PL920_AIR_JET_LOOM, PL5810_WATER_JET_LOOM } from '@/lib/specs';

export const metadata = constructMetadata({
  title: 'Air Jet & Water Jet Loom Supplier in India',
  description:
    'Poulo Machinery supplies Air Jet and Water Jet Looms for textile weaving applications in India. Based in Surat, Gujarat. Explore models, technical specifications and request a quotation.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION (LCP Element Optimized) */}
      <section className="bg-slate-900 text-white pt-16 pb-24 sm:py-24 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-900/80 text-blue-300 border border-blue-700/60 px-3 py-1 rounded-full text-xs font-semibold">
              <ShieldCheck size={14} className="text-blue-400" />
              <span>India-Side Importer & Supplier | Based in Surat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Air Jet & Water Jet Loom Importer and Supplier in India
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Based in Surat, Gujarat, Poulo Machinery supplies selected high-speed weaving loom systems sourced from Qingdao Jinxin Hejia Machinery Co., Ltd., China.
            </p>

            <HeroButtons />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div>
                <span className="block font-bold text-white text-sm">Surat Office</span>
                Kareli, Sayan, Olpad
              </div>
              <div>
                <span className="block font-bold text-white text-sm">Sourced Partner</span>
                Qingdao Jinxin Hejia
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-bold text-white text-sm">Machine Types</span>
                Air Jet & Water Jet Looms
              </div>
            </div>
          </div>

          <HeroImageSlider />
        </div>
      </section>

      {/* 2. PRODUCT FAMILIES */}
      <section id="product-families" className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Weaving Loom Product Families</h2>
          <p className="text-slate-600 text-sm">
            High-efficiency weaving solutions for cotton, synthetic, and blended fabric manufacturing mills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Air Jet Category Card */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/poulo-machinery-air-jet-loom-pl920-surat.webp"
                alt="Air Jet Looms"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                // className="object-contain p-3"
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Category Overview</span>
                <h3 className="text-xl font-bold text-slate-900">Air Jet Looms</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  High-speed, energy-optimized air jet weaving systems designed for fine cotton, shirting, bottom weights, denim, and spun yarn applications.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Reed Widths: 190 cm to 360 cm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Yarn Range: Short staple 100s–5s; Filament 50D–900D</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Shedding: Cam (up to 8 frames), Dobby (16 frames), Jacquard</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/air-jet-looms/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 pt-4 border-t border-slate-100"
              >
                <span>Explore Air Jet Looms</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Water Jet Category Card */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/water-jet-loom-poulo-machinery-surat.webp"
                alt="Water Jet Looms"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                // className="object-contain p-3"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Category Overview</span>
                <h3 className="text-xl font-bold text-slate-900">Water Jet Looms</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  High-speed water jet weaving machines engineered for hydrophobic synthetic filaments, polyester taffeta, lining, and nylon fabrics.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Reed Widths: 150 cm to 380 cm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Design Speed: Up to 1100 RPM maximum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>Weft Selection: 1 to 6 jet electronic free selection</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/water-jet-looms/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 pt-4 border-t border-slate-100"
              >
                <span>Explore Water Jet Looms</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED MODELS */}
      <section className="bg-slate-100 py-12 px-4 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Model Selection</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Machinery Models</h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Detailed machine parameters vary by custom configuration. Confirm final specifications with our technical team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model Card 1: PL920 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Air Jet
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{PL920_AIR_JET_LOOM.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                {PL920_AIR_JET_LOOM.tagline}
              </p>

              <div className="space-y-1.5 text-xs border-t border-b border-slate-100 py-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Reed Width Range:</span>
                  <span className="font-semibold text-slate-800">190 – 360 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Weft Insertion:</span>
                  <span className="font-semibold text-slate-800">Profile Reed + Sub-Nozzles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Let-Off System:</span>
                  <span className="font-semibold text-slate-800">Electronic Let-off (ELO)</span>
                </div>
              </div>

              <Link
                href="/air-jet-looms/pl920/"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2.5 rounded text-center block transition-colors"
              >
                View Full PL920 Specs & Configuration
              </Link>
            </div>

            {/* Model Card 2: PL5810 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Water Jet
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{PL5810_WATER_JET_LOOM.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                {PL5810_WATER_JET_LOOM.tagline}
              </p>

              <div className="space-y-1.5 text-xs border-t border-b border-slate-100 py-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Reed Width Range:</span>
                  <span className="font-semibold text-slate-800">150 – 380 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Design Max Speed:</span>
                  <span className="font-semibold text-slate-800">Up to 1100 RPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Weft Selection:</span>
                  <span className="font-semibold text-slate-800">1 – 6 Jet Free Selection</span>
                </div>
              </div>

              <Link
                href="/water-jet-looms/pl5810/"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2.5 rounded text-center block transition-colors"
              >
                View Full PL5810 Specs & Configuration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY POULO MACHINERY */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Commercial Contact</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Work With Poulo Machinery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">India-Based Point of Contact</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based in Surat, Gujarat, Poulo Machinery provides local communication and direct coordination for textile manufacturers across India.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Configuration Discussion</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We assist mill owners in mapping required reed widths, shedding mechanisms (Cam, Dobby, Jacquard), and weft options to match specific fabric constructions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Direct Quotation Process</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear, transparent quotation inquiries connecting Indian buyers with high-speed weaving technology sourced from Qingdao Jinxin Hejia Machinery Co., Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING PARTNER SECTION */}
      <section className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-900/80 text-blue-300 border border-blue-700/60 px-3 py-1 rounded text-xs font-semibold">
              <Factory size={14} className="text-blue-400" />
              <span>China Manufacturing Partner</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Qingdao Jinxin Hejia Machinery Co., Ltd.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Poulo Machinery sources its Air Jet and Water Jet loom systems from <strong>Qingdao Jinxin Hejia Machinery Co., Ltd.</strong>, a specialized textile machinery manufacturer based in Qingdao, China.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              The China-side manufacturing facilities utilize CNC machining centers and structured assembly lines for weaving loom frames, shedding mechanisms, and pump systems.
            </p>

            <div className="pt-2">
              <Link
                href="/manufacturer-partner/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded transition-colors"
              >
                <span>Read About Our Manufacturing Partner</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
              <Image
                src="/images/poulo-machinery-factory-aerial-surat.webp"
                alt="Qingdao Jinxin Hejia manufacturing facility in Qingdao, China"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 p-2.5 text-[11px] text-slate-300 border-t border-slate-700">
                <strong>Photo Caption:</strong> Qingdao Jinxin Hejia Machinery manufacturing facility (Qingdao, China).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING DETAIL SECTION (PL920 Anatomy & Specs) */}
      <section className="max-w-[1280px] mx-auto px-4 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Technical Explainer</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">PL920 Engineering & System Anatomy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">High-Speed Air Jet Weft Insertion</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The PL920 Air Jet Loom utilizes a dual-nozzle acceleration system combined with sub-nozzles along a profile reed. This ensures stable weft insertion for both fine cotton yarns and synthetic filaments without damaging yarn structure.
            </p>

            <div className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Electronic Let-off (ELO):</strong> Maintains constant warp tension from beam start to empty beam.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Optical Weft Sensing:</strong> Reflective feeler prevents false stops and detects weft breaks instantaneously.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Vibration-Damped Frame:</strong> Robust box frame minimizes floor vibration during high-speed beat-up.
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded border border-slate-200 bg-slate-100 overflow-hidden">
            <Image
              src="/images/air-jet-loom-speed-weaving-surat.webp"
              alt="PL920 Air Jet Loom weaving operation"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS & SELECTION FACTORS */}
      <section className="bg-slate-100 py-12 px-4 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Selecting Between Air Jet & Water Jet Looms</h2>
            <p className="text-xs text-slate-600">
              Key application guidance based on yarn type and fabric hydrophobic properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm text-blue-700">Choose Air Jet Looms (PL920) for:</h3>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Cotton & Spun Fabrics:</strong> Shirting, sheeting, bottom weights, and denim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Hydrophilic / Natural Yarns:</strong> Materials that absorb water and cannot be woven on water jet looms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Multi-Color Weft Insertion:</strong> 2, 4, or 6-color arbitrary pattern switching.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm text-cyan-700">Choose Water Jet Looms (PL5810) for:</h3>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Hydrophobic Synthetic Yarns:</strong> Polyester, nylon, filament yarn fabrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>High Production Volumes:</strong> High RPM continuous production for lining, taffeta, and umbrella cloth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Energy-Optimized Synthetic Weaving:</strong> Reduced electrical consumption per meter compared to compressed air insertion for filament fabrics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUOTE CTA SECTION */}
      <section className="max-w-[1280px] mx-auto px-4">
        <QuoteForm />
      </section>

      {/* 9. SURAT CONTACT BLOCK */}
      <section className="max-w-[1280px] mx-auto px-4 pt-8">
        <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Office Location</span>
            <h3 className="text-lg font-bold">Surat Office</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_CONTACT.address}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Direct Inquiries</span>
            <h3 className="text-lg font-bold">Phone & WhatsApp</h3>
            <p className="text-xs text-slate-300">
              Contact Person: {COMPANY_CONTACT.contactPerson}
            </p>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-xs font-semibold"
            >
              <Phone size={14} />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Email Communication</span>
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="text-xs text-slate-300">
              Send technical inquiries and RFQs to:
            </p>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-xs font-semibold"
            >
              <Mail size={14} />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
