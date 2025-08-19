import Hero from '@components/hero/Hero';
import History from '@components/history/History';
import Layout from '@components/layout/Layout';
import Section from '@components/section/Section';
import Seo from '@components/seo/Seo';
import SchoolUnit from '@components/units/SchoolUnit';
import WhyUs from '@components/why-us/WhyUs';
import Image from 'next/image';
import plakat from '../public/plakat.webp';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <SchoolUnit />
        <Section title="Historia SZKOŁY">
          <History />
        </Section>
      <Link href="/signup">
        <Image src={plakat} alt="plakat" />
      </Link>
      </Layout>
      <WhyUs />
    </>
  );
}
