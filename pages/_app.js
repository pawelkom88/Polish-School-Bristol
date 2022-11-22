import { NextSeo } from 'next-seo';
import { favicon } from '../seo.config';
import data from '../data/data.json';
import '@fontsource/questrial';
import '@fontsource/teko';
import './styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        additionalLinkTags={favicon}
        title="Polska Szkoła Języka i Kultury w Bristolu"
        description="Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie."
        canonical="ps-bristol.netlify.app"
        openGraph={{
          url: 'ps-bristol.netlify.app',
          title: 'Polska Szkoła Języka i Kultury w Bristolu',
          description:
            'Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie.',
          images: [
            {
              url: '/ps-bistol-social-media-card.webp',
              width: 800,
              height: 600,
              alt: 'Polska Szkoła Języka i Kultury w Bristolu',
              type: 'image/webp',
            },
            {
              url: '/ps-bistol-social-media-card.webp',
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
      <Component data={data} {...pageProps} />
    </>
  );
}

export default MyApp;
