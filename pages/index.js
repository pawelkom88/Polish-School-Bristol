import Hero from '../components/hero/Hero';
import Navigation from '../components/navigation/Navigation';
import FAQ from '../components/faq/FAQ';
import Footer from '../components/footer/Footer';
import '@fontsource/questrial';
import '@fontsource/teko';

export default function Home() {
  return (
    <>
      <div className="h-screen ">
        <Navigation />
        <Hero />
        <main>
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
