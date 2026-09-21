import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getOrganizationSchema, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Air Jet & Water Jet Loom Supplier in India | Poulo Machinery',
    template: '%s | ' + SITE_NAME,
  },
  description:
    'Poulo Machinery supplies Air Jet and Water Jet Looms for textile weaving applications in India. Based in Surat, Gujarat. Explore models, technical specifications and request a quotation.',
  keywords: [
    'Air Jet Loom Supplier',
    'Water Jet Loom Supplier',
    'Weaving Machinery Surat',
    'PL920 Air Jet Loom',
    'PL5810 Water Jet Loom',
    'Textile Machinery Importer India',
    'Poulo Machinery Surat',
    'Qingdao Jinxin Hejia Machinery',
  ],
  authors: [{ name: 'Poulo Machinery' }],
  creator: 'Poulo Machinery',
  publisher: 'Poulo Machinery',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Air Jet & Water Jet Loom Supplier in India | Poulo Machinery',
    description:
      'Poulo Machinery supplies Air Jet and Water Jet Looms for textile weaving applications in India. Based in Surat, Gujarat.',
    images: [
      {
        url: SITE_URL + '/images/air-jet-loom-poulo-machinery-surat.webp',
        width: 1200,
        height: 630,
        alt: 'Poulo Machinery Air Jet and Water Jet Looms',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-slate-900 bg-slate-50 antialiased selection:bg-blue-100 selection:text-blue-900 font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
