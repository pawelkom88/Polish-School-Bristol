export const SITE_CONFIG = {
  url: 'https://polishschoolbristol.com',
  name: 'Polska Szkoła Języka i Kultury w Bristolu',
  title: 'Polska Szkoła Języka i Kultury w Bristolu',
  description: 'Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie.',
  locale: 'pl_PL',
  logo: '/polish-flag.webp',
  twitter: {
    site: '@polishschoolbristol',
    creator: '@polishschoolbristol',
  },
};

export const DEFAULT_SEO = {
  canonical: '',
  url: '',
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  image: `${SITE_CONFIG.url}/social-media-card.png`,
  type: 'website',
};

export const generatePageSEO = (pageData) => {
  return {
    canonical: pageData.canonical || '',
    url: pageData.url || '',
    title: pageData.title || SITE_CONFIG.title,
    description: pageData.description || SITE_CONFIG.description,
    image: pageData.image || DEFAULT_SEO.image,
    type: pageData.type || 'website',
  };
};

// Common Open Graph image dimensions for optimal social media display
export const OG_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 630,
};

// Additional meta tags for better SEO
export const ADDITIONAL_META_TAGS = [
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
  {
    name: 'robots',
    content: 'index, follow',
  },
  {
    httpEquiv: 'Content-Language',
    content: 'pl',
  },
  {
    name: 'author',
    content: 'Polska Szkoła Języka i Kultury w Bristolu',
  },
  {
    name: 'keywords',
    content: 'polska szkoła, Bristol, język polski, kultura polska, tradycje polskie, dzieci, młodzież',
  },
];

// -----------------------------
// JSON-LD builders
// -----------------------------

export function buildWebsiteJsonLd({ siteUrl = SITE_CONFIG.url, searchUrl }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: siteUrl,
    potentialAction: searchUrl
      ? {
          '@type': 'SearchAction',
          target: `${siteUrl}${searchUrl}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        }
      : undefined,
  };
}

export function buildOrganizationJsonLd({ sameAs = [], logo = SITE_CONFIG.logo }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${logo}`,
    sameAs,
  };
}

export function buildSchoolJsonLd(school) {
  if (!school) return null;
  const addressText = school.location?.address || '';
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: `${school.name} – ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/school/${encodeURIComponent(school.name)}`,
    telephone: school.tel || undefined,
    email: school.mail || undefined,
    image: school.cardIcon ? `${SITE_CONFIG.url}${school.cardIcon}` : undefined,
    sameAs: school.socialMedia ? [school.socialMedia] : undefined,
    address: addressText
      ? {
          '@type': 'PostalAddress',
          streetAddress: addressText,
          addressLocality: 'Bristol',
          addressCountry: 'UK',
        }
      : undefined,
    geo:
      typeof school.location?.lat === 'number' && typeof school.location?.lng === 'number'
        ? {
            '@type': 'GeoCoordinates',
            latitude: school.location.lat,
            longitude: school.location.lng,
          }
        : undefined,
  };
}

export function buildPersonJsonLd(person, { affiliationName } = {}) {
  if (!person) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    image: person.photo ? `${SITE_CONFIG.url}${person.photo}` : undefined,
    affiliation: affiliationName
      ? {
          '@type': 'Organization',
          name: affiliationName,
        }
      : undefined,
  };
}

export function buildItemListJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((thing, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: thing,
    })),
  };
}
