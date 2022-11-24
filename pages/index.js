import Hero from '../components/hero/Hero';
import Navigation from '../components/navigation/Navigation';
import SchoolUnit from '../components/units/SchoolUnit';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl flex justify-center items-center flex-col md:mt-18 mt-24 mx-auto">
        <Hero />
        <SchoolUnit />
      </main>
    </>
  );
}
