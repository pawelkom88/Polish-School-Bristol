import Navigation from '@components/navigation/Navigation';
import Footer from '@components/footer/Footer';
import { schoolData } from '@data/data.js';
import '@fontsource/questrial';
import './styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component data={schoolData} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
