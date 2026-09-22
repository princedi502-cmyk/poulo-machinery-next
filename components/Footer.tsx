import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/seo';
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 text-sm">
      <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <Image
            src="/poulo-logo.webp"
            alt="Poulo Machinery"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover ring-1 ring-slate-700"
          />
          <p className="text-slate-400 text-xs leading-relaxed">
            Poulo Machinery is an India-side importer and supplier of high-speed Air Jet and Water Jet weaving looms based in Surat, Gujarat.
          </p>
          <div className="p-3 bg-slate-800/80 rounded border border-slate-700/60 text-xs text-slate-300">
            <span className="font-semibold text-blue-400 block mb-1">Manufacturer Relationship</span>
            Weaving loom systems are manufactured by <strong className="text-white">Qingdao Jinxin Hejia Machinery Co., Ltd.</strong> (China) and supplied in India by Poulo Machinery.
          </div>
        </div>

        {/* Column 2: Loom Models */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Weaving Machinery</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/air-jet-looms/" className="hover:text-blue-400 transition-colors">
                Air Jet Looms Overview
              </Link>
            </li>
            <li>
              <Link href="/air-jet-looms/pl920/" className="hover:text-blue-400 transition-colors">
                PL920 High-Speed Air Jet Loom
              </Link>
            </li>
            <li>
              <Link href="/water-jet-looms/" className="hover:text-blue-400 transition-colors">
                Water Jet Looms Overview
              </Link>
            </li>
            <li>
              <Link href="/water-jet-looms/pl5810/" className="hover:text-blue-400 transition-colors">
                PL5810 High-Speed Water Jet Loom
              </Link>
            </li>
            <li>
              <Link href="/resources/air-jet-vs-water-jet-loom/" className="hover:text-blue-400 transition-colors">
                Air Jet vs Water Jet Loom Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links & Partner */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/manufacturer-partner/" className="hover:text-blue-400 transition-colors">
                Manufacturing Partner (China)
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-blue-400 transition-colors">
                About Poulo Machinery
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-blue-400 transition-colors">
                Contact & Quotation Request
              </Link>
            </li>
            <li>
              <a
                href="https://en.qdjinxinhejia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 text-slate-400"
              >
                <span>Qingdao Jinxin Hejia Website</span>
                <ExternalLink size={10} />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Surat Address */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Surat Office</h3>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
              <span>{COMPANY_CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-400 shrink-0" />
              <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                {COMPANY_CONTACT.phone} ({COMPANY_CONTACT.contactPerson})
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-blue-400 shrink-0" />
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors">
                {COMPANY_CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-[1280px] mx-auto px-4 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Poulo Machinery. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_CONTACT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @poulomachinery"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_CONTACT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — @poulomachinery"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
          <span className="font-mono text-slate-400 text-xs">{COMPANY_CONTACT.social.handle}</span>
        </div>
      </div>
    </footer>
  );
}

