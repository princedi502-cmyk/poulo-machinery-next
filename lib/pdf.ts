import { jsPDF } from 'jspdf';
import { COMPANY_CONTACT } from '@/lib/seo';

// ---- Brand palette (RGB) ----
const BLUE: [number, number, number] = [29, 78, 216];
const NAVY: [number, number, number] = [15, 23, 42];
const SLATE: [number, number, number] = [71, 85, 105];
const MUTED: [number, number, number] = [100, 116, 139];
const FAINT: [number, number, number] = [148, 163, 184];
const LIGHT: [number, number, number] = [241, 245, 249];

const CONTACT = {
  phone: COMPANY_CONTACT.phone,
  whatsapp: COMPANY_CONTACT.whatsapp,
  email: COMPANY_CONTACT.email,
  email2: 'help.poulo@gmail.com',
  web: 'www.poulomachinery.com',
  social: COMPANY_CONTACT.social.handle,
  address: COMPANY_CONTACT.address,
};

const PAGE = { w: 210, h: 297, m: 18 };

const ABOUT = [
  'At POULO, we are dedicated to transforming the textile industry through advanced weaving technology, innovative engineering, and reliable machinery solutions. As a trusted manufacturer and supplier of high-performance Air Jet and Water Jet loom machines, we empower textile manufacturers to achieve greater productivity, precision, fabric consistency, and operational excellence.',
  'With a strong commitment to quality and continuous innovation, POULO designs machinery engineered for high-speed performance, energy efficiency, low maintenance, and long-term durability - helping businesses maximise output while maintaining superior fabric quality.',
];

const VISION = 'To become a trusted leader in machinery by driving innovation, durability, and operational excellence.';
const MISSION = 'To engineer and deliver high-performance textile machinery that ensures quality, efficiency, and customer success.';

const ACRONYM: [string, string][] = [
  ['P', 'Precision Performance'],
  ['O', 'Optimized Operation'],
  ['U', 'Ultimate Utility'],
  ['L', 'Loom Leadership'],
  ['O', 'Outstanding Output'],
];

const RECOGNITION = [
  'High-Tech Enterprise - recognised for innovation & technology',
  'Specialized & Sophisticated SME - advanced manufacturing',
  'Patented Technology - proprietary engineering & software',
  'R&D Driven - strong research & development capability',
];

const PARTNERS = ['SKF', 'NACHI', 'NIDEC', 'INOVANCE', 'NIUPAI', 'BINTIAN', 'XINLIAO', 'SANHE JIXIE'];

const CATALOG = [
  {
    title: 'Air Jet Looms', tagline: 'Speed - Precision - Efficiency', img: '/images/air-jet-loom-speed-weaving-surat.webp',
    desc: 'High-speed air jet looms carry the weft across the warp with a precisely controlled jet of air - engineered for energy efficiency and low maintenance, ideal for high-volume production of light to medium fabrics.',
    features: ['High weft-insertion speed', 'Optimised air consumption', 'Electronic let-off & take-up', 'Low-maintenance design'],
    apps: 'Shirting & suiting, bed sheets, home textiles',
  },
  {
    title: 'Water Jet Looms', tagline: 'Powerful - Performance - Productivity', img: '/images/water-jet-loom-synthetic-fabric-surat.webp',
    desc: 'Water jet looms insert the weft with a high-pressure jet of water at high speed - purpose-built for synthetic filament fabrics, producing a clean, uniform selvedge with stable weft tension.',
    features: ['Excellent for synthetic filaments', 'High running speed', 'Clean, uniform selvedge', 'Stable weft tension'],
    apps: 'Polyester & nylon, lining, fine to heavy synthetics',
  },
];

// ---- helpers ----
function fill(doc: jsPDF, c: [number, number, number]) { doc.setFillColor(c[0], c[1], c[2]); }
function ink(doc: jsPDF, c: [number, number, number]) { doc.setTextColor(c[0], c[1], c[2]); }

function lines(doc: jsPDF, text: string, x: number, y: number, w: number, lh: number, size: number, color: [number, number, number], bold = false) {
  doc.setFont('helvetica', bold ? 'bold' : 'normal');
  doc.setFontSize(size);
  ink(doc, color);
  const arr = doc.splitTextToSize(text, w);
  arr.forEach((ln: string, i: number) => doc.text(ln, x, y + i * lh));
  return y + arr.length * lh;
}

function cover(doc: jsPDF, kind: string) {
  fill(doc, NAVY); doc.rect(0, 0, PAGE.w, PAGE.h, 'F');
  fill(doc, BLUE); doc.rect(0, 96, PAGE.w, 2.5, 'F');

  fill(doc, BLUE); doc.roundedRect(PAGE.m, 34, 13, 13, 3, 3, 'F');
  ink(doc, [255, 255, 255]); doc.setFont('helvetica', 'bold'); doc.setFontSize(15);
  doc.text('P', PAGE.m + 6.5, 43, { align: 'center' });
  doc.setFontSize(12); doc.text('POULO MACHINERY', PAGE.m + 18, 42.5);

  ink(doc, [255, 255, 255]); doc.setFont('helvetica', 'bold'); doc.setFontSize(38);
  doc.text('Power. Precision.', PAGE.m, 126);
  doc.text('Performance.', PAGE.m, 142);

  ink(doc, FAINT); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text(kind.toUpperCase(), PAGE.m, 162);

  lines(doc, 'High-performance Air Jet and Water Jet loom machines engineered for speed, precision and efficiency.', PAGE.m, 176, 150, 6, 11, [203, 213, 225]);

  doc.setDrawColor(...FAINT); doc.setLineWidth(0.2); doc.line(PAGE.m, 272, PAGE.w - PAGE.m, 272);
  ink(doc, FAINT); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  doc.text(`${CONTACT.web}   |   ${CONTACT.phone}`, PAGE.m, 279);
  doc.text(CONTACT.social, PAGE.w - PAGE.m, 279, { align: 'right' });
}

function header(doc: jsPDF, eyebrow: string, title: string) {
  fill(doc, BLUE); doc.rect(0, 0, PAGE.w, 2, 'F');
  ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
  doc.text(eyebrow.toUpperCase(), PAGE.m, 22);
  ink(doc, NAVY); doc.setFontSize(21);
  doc.text(title, PAGE.m, 32);
  doc.setDrawColor(...LIGHT); doc.setLineWidth(0.4); doc.line(PAGE.m, 37, PAGE.w - PAGE.m, 37);
  return 48;
}

function footers(doc: jsPDF) {
  const total = doc.getNumberOfPages();
  for (let p = 2; p <= total; p++) {
    doc.setPage(p);
    doc.setDrawColor(...LIGHT); doc.setLineWidth(0.3); doc.line(PAGE.m, 283, PAGE.w - PAGE.m, 283);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); ink(doc, MUTED);
    doc.text(`POULO Machinery  |  ${CONTACT.web}`, PAGE.m, 289);
    doc.text(String(p - 1), PAGE.w - PAGE.m, 289, { align: 'right' });
  }
}

function pillar(doc: jsPDF, title: string, text: string, y: number) {
  fill(doc, LIGHT); doc.roundedRect(PAGE.m, y, PAGE.w - 2 * PAGE.m, 26, 2, 2, 'F');
  fill(doc, BLUE); doc.roundedRect(PAGE.m, y, 2.5, 26, 1, 1, 'F');
  ink(doc, NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text(title, PAGE.m + 8, y + 9);
  lines(doc, text, PAGE.m + 8, y + 16, PAGE.w - 2 * PAGE.m - 16, 4.6, 10, MUTED);
  return y + 32;
}

function contactBlock(doc: jsPDF, y: number) {
  fill(doc, NAVY); doc.roundedRect(PAGE.m, y, PAGE.w - 2 * PAGE.m, 74, 3, 3, 'F');
  ink(doc, [255, 255, 255]); doc.setFont('helvetica', 'bold'); doc.setFontSize(16);
  doc.text("Let's build something great.", PAGE.m + 10, y + 15);
  const rows: [string, string][] = [
    ['Mobile', CONTACT.phone],
    ['WhatsApp', CONTACT.whatsapp],
    ['Email', CONTACT.email],
    ['', CONTACT.email2],
    ['Website', CONTACT.web],
    ['Social', CONTACT.social],
  ];
  rows.forEach(([label, value], i) => {
    const ry = y + 25 + i * 6.5;
    ink(doc, FAINT); doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    if (label) doc.text(label, PAGE.m + 10, ry);
    ink(doc, [255, 255, 255]);
    doc.text(value, PAGE.m + 38, ry);
  });
  ink(doc, FAINT); doc.setFontSize(9);
  lines(doc, CONTACT.address, PAGE.m + 10, y + 68, PAGE.w - 2 * PAGE.m - 20, 4, 9, FAINT);
  return y + 82;
}

async function imgToData(src: string, maxW = 700): Promise<{ data: string }> {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = src; });
  const scale = Math.min(1, maxW / img.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
  return { data: canvas.toDataURL('image/jpeg', 0.85) };
}

function productEntry(doc: jsPDF, p: typeof CATALOG[0], image: { data: string } | null, y: number) {
  const iw = 80, ih = 56;
  fill(doc, LIGHT); doc.roundedRect(PAGE.m, y, iw, ih, 2, 2, 'F');
  if (image) {
    try { doc.addImage(image.data, 'JPEG', PAGE.m + 1.5, y + 1.5, iw - 3, ih - 3); } catch { /* skip */ }
  }
  const tx = PAGE.m + iw + 8;
  const tw = PAGE.w - PAGE.m - tx;
  ink(doc, NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(15);
  doc.text(p.title, tx, y + 6);
  ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
  doc.text(p.tagline.toUpperCase(), tx, y + 11.5);
  let cy = lines(doc, p.desc, tx, y + 18, tw, 4.4, 9, MUTED) + 2;
  ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5);
  doc.text('KEY FEATURES', tx, cy); cy += 4.6;
  ink(doc, SLATE); doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
  p.features.forEach((f) => { doc.text(`-  ${f}`, tx, cy); cy += 4.4; });
  cy += 1.5;
  ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5);
  doc.text('APPLICATIONS', tx, cy); cy += 4.6;
  lines(doc, p.apps, tx, cy, tw, 4.4, 8.5, MUTED);
}

// ---- builders ----
export function buildBrochure() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  cover(doc, 'Company Brochure');

  // About + Vision/Mission
  doc.addPage();
  let y = header(doc, 'About Us', 'Transforming the Textile Industry');
  ABOUT.forEach((para) => { y = lines(doc, para, PAGE.m, y, PAGE.w - 2 * PAGE.m, 5.4, 11, SLATE) + 4; });
  ink(doc, NAVY); doc.setFont('helvetica', 'bolditalic'); doc.setFontSize(13);
  doc.text('Power. Precision. Performance.', PAGE.m, y + 2); y += 12;
  y = pillar(doc, 'Our Vision', VISION, y);
  pillar(doc, 'Our Mission', MISSION, y + 2);

  // Philosophy (POULO acronym)
  doc.addPage();
  y = header(doc, 'Our Philosophy', 'What POULO Stands For');
  ACRONYM.forEach(([letter, label]) => {
    fill(doc, BLUE); doc.roundedRect(PAGE.m, y - 6, 9, 9, 2, 2, 'F');
    ink(doc, [255, 255, 255]); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
    doc.text(letter, PAGE.m + 4.5, y, { align: 'center' });
    ink(doc, NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
    doc.text(label, PAGE.m + 15, y);
    y += 16;
  });

  // Machines
  doc.addPage();
  y = header(doc, 'Our Machines', 'Loom Machines');
  CATALOG.forEach((p) => {
    ink(doc, NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text(p.title, PAGE.m, y);
    ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
    doc.text(p.tagline.toUpperCase(), PAGE.m, y + 5.5);
    y = lines(doc, p.desc, PAGE.m, y + 12, PAGE.w - 2 * PAGE.m, 5, 10, MUTED) + 3;
    ink(doc, SLATE); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
    doc.text(p.features.map((f) => `- ${f}`).join('     '), PAGE.m, y);
    y += 14;
  });

  // Recognition + Partners
  doc.addPage();
  y = header(doc, 'Certifications & Recognition', 'Quality You Can Trust');
  y = lines(doc, 'Our recognitions reflect strong R&D capabilities, industrial expertise, and a commitment to technological advancement and quality standards.', PAGE.m, y, PAGE.w - 2 * PAGE.m, 5.2, 10, SLATE) + 6;
  ink(doc, SLATE); doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
  RECOGNITION.forEach((r) => { doc.text(`-  ${r}`, PAGE.m, y); y += 6.5; });
  y += 6;
  ink(doc, BLUE); doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
  doc.text('ASSOCIATE PARTNERS - BUILT WITH WORLD-CLASS COMPONENTS', PAGE.m, y); y += 8;
  ink(doc, NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.text(PARTNERS.join('     |     '), PAGE.m, y);

  // Contact
  doc.addPage();
  y = header(doc, 'Get in Touch', "Let's Talk");
  lines(doc, "Ready to boost your mill's productivity? Reach out for pricing, demos and tailored recommendations.", PAGE.m, y, PAGE.w - 2 * PAGE.m, 5.4, 11, SLATE);
  contactBlock(doc, y + 14);

  footers(doc);
  return doc;
}

export async function buildCatalogue() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  cover(doc, 'Machine Catalogue');

  const images: Record<string, { data: string } | null> = {};
  for (const p of CATALOG) {
    try { images[p.title] = await imgToData(p.img); } catch { images[p.title] = null; }
  }

  doc.addPage();
  header(doc, 'Machine Catalogue', 'Our Loom Machines');
  productEntry(doc, CATALOG[0], images[CATALOG[0].title], 52);
  productEntry(doc, CATALOG[1], images[CATALOG[1].title], 168);

  doc.addPage();
  const y = header(doc, 'Get in Touch', 'Order & Enquiries');
  lines(doc, 'Contact us for detailed specifications, pricing and availability on any machine in this catalogue.', PAGE.m, y, PAGE.w - 2 * PAGE.m, 5.4, 11, SLATE);
  contactBlock(doc, y + 14);

  footers(doc);
  return doc;
}

export function downloadBrochure() {
  buildBrochure().save('POULO-Machinery-Brochure.pdf');
}

export async function downloadCatalogue() {
  const doc = await buildCatalogue();
  doc.save('POULO-Machine-Catalogue.pdf');
}

