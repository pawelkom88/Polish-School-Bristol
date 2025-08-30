import { NextSeo } from 'next-seo';
import { favicon } from '../../seo.config';
import { 
  SITE_CONFIG, 
  DEFAULT_SEO, 
  OG_IMAGE_DIMENSIONS, 
  ADDITIONAL_META_TAGS 
} from '../../config/seo';

export default function Seo({ seo = DEFAULT_SEO }) {
  const fullUrl = `${SITE_CONFIG.url}${seo.url || ''}`;
  const canonicalUrl = `${SITE_CONFIG.url}${seo.canonical || ''}`;
  const ogImage = seo.image || DEFAULT_SEO.image;

  return (
    <NextSeo
      additionalLinkTags={favicon}
      title={seo.title}
      description={seo.description}
      canonical={canonicalUrl}
      openGraph={{
        type: seo.type || 'website',
        locale: SITE_CONFIG.locale,
        url: fullUrl,
        title: seo.title,
        description: seo.description,
        siteName: SITE_CONFIG.name,
        images: [
          {
            url: ogImage,
            width: OG_IMAGE_DIMENSIONS.width,
            height: OG_IMAGE_DIMENSIONS.height,
            alt: seo.title,
            type: 'image/png',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        site: SITE_CONFIG.twitter.site,
        creator: SITE_CONFIG.twitter.creator,
      }}
      additionalMetaTags={ADDITIONAL_META_TAGS}
    />
  );
}
