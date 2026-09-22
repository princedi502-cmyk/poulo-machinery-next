export const SITE_URL = 'https://poulomachinery.com';
export const SITE_NAME = 'Poulo Machinery';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/air-jet-loom-poulo-machinery-surat.webp`;

export const COMPANY_CONTACT = {
  address: '7 & 8 Keshav Textile Industrial Estate, Kareli, Sayan, Olpad, Surat, Gujarat, India 394130',
  city: 'Surat',
  state: 'Gujarat',
  country: 'India',
  postalCode: '394130',
  phone: '+91 81417 22722',
  phoneRaw: '+918141722722',
  whatsapp: '+91 81417 22722',
  whatsappRaw: '918141722722',
  contactPerson: 'Jeel Anghan',
  email: 'poulomachinery@gmail.com',
  social: {
    handle: '@poulomachinery',
    instagram: 'https://instagram.com/poulomachinery',
    facebook: 'https://www.facebook.com/people/Poulo-Machinery/61572346245996/',
  },
};

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export function constructMetadata({ title, description, path, ogType = 'website', ogImage = DEFAULT_OG_IMAGE }: SEOProps) {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    canonical: url,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/poulo-logo.webp`,
    description: 'Importer and supplier of Air Jet and Water Jet weaving looms for textile applications in India. Based in Surat, Gujarat.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_CONTACT.address,
      addressLocality: COMPANY_CONTACT.city,
      addressRegion: COMPANY_CONTACT.state,
      postalCode: COMPANY_CONTACT.postalCode,
      addressCountry: COMPANY_CONTACT.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_CONTACT.phone,
      contactType: 'sales & customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    sameAs: [
      COMPANY_CONTACT.social.instagram,
      COMPANY_CONTACT.social.facebook,
    ],
  };
}

export function getProductSchema(model: {
  name: string;
  description: string;
  image: string;
  id: string;
  type: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: model.name,
    image: model.image.startsWith('http') ? model.image : `${SITE_URL}${model.image}`,
    description: model.description,
    brand: {
      '@type': 'Brand',
      name: 'Qingdao Jinxin Hejia Machinery Co., Ltd.',
    },
    seller: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    category: model.type === 'air-jet' ? 'Air Jet Loom' : 'Water Jet Loom',
    url: `${SITE_URL}/${model.type}-looms/${model.id}/`,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

