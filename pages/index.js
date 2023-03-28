import Hero from '../components/hero/Hero';
import History from '../components/history/History';
import Navigation from '../components/navigation/Navigation';
import SchoolUnit from '../components/units/SchoolUnit';
import Section from '../components/section/Section';
import Footer from '../components/footer/Footer';
import WhyUs from '../components/why-us/WhyUs';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl flex justify-center items-center flex-col md:mt-18 mt-24 mx-auto">
        <Hero />
        <SchoolUnit />
        <Section title="Historia SZKOŁY">
          <History />
        </Section>
      </main>
      <WhyUs />
      <Footer />
    </>
  );
}
