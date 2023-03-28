import { NextSeo } from 'next-seo';
import { favicon } from '../seo.config';
import data from '../data/data.json';
import '@fontsource/questrial';
import './styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        additionalLinkTags={favicon}
        title="Polska Szkoła Języka i Kultury w Bristolu"
        description="Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie."
        canonical="ps-bristol.netlify.app"  // change make dynamic
        openGraph={{
          url: 'ps-bristol.netlify.app', // change make dynamic
          title: 'Polska Szkoła Języka i Kultury w Bristolu', // change make dynamic
          description:
            'Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie.',
          images: [
            {
              url: 'https://github.com/pawelkom88/Polish-School-Bristol/blob/main/public/ps-bistol-social-media-card.webp?raw=true',
              width: 800,
              height: 600,
              alt: 'Polska Szkoła Języka i Kultury w Bristolu',
              type: 'image/webp',
            },
            {
              url: 'https://github.com/pawelkom88/Polish-School-Bristol/blob/main/public/ps-bistol-social-media-card.webp?raw=true',
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
