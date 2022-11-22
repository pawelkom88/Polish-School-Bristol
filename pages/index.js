import Hero from '../components/hero/Hero';
import Navigation from '../components/navigation/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="h-screen overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
