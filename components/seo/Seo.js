import { NextSeo } from 'next-seo';
import { favicon } from '../../seo.config';

const defaultSEO = {
  canonical: '',
  url: '',
  title: 'Polska Szkoła Języka i Kultury w Bristolu',
  description:
    'Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie.',
};

export default function Seo({ seo = defaultSEO }) {
  return (
    <NextSeo
      additionalLinkTags={favicon}
      title={`${seo.title}`}
      description={`${seo.description}`}
      canonical={`http://polishschoolbristol.com/${seo.canonical}`}
      openGraph={{
        url: `http://polishschoolbristol.com/${seo.url}`,
        title: `${seo.title}`,
        description: `${seo.description}`,
        images: [
          {
            url: 'https://raw.githubusercontent.com/pawelkom88/Polish-School-Bristol/main/public/social-media-card.png',
            width: 800,
            height: 600,
            alt: 'Polska Szkoła Języka i Kultury w Bristolu',
            type: 'image/webp',
          },
          {
            url: 'https://raw.githubusercontent.com/pawelkom88/Polish-School-Bristol/main/public/social-media-card.png',
            width: 900,
            height: 800,
            alt: 'Polska Szkoła Języka i Kultury w Bristolu',
            type: 'image/webp',
          },
        ],
        siteName: 'Polska Szkoła Języka i Kultury w Bristolu',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  );
}
