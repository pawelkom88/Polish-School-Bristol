import Hero from '@components/hero/Hero';
import History from '@components/history/History';
import SchoolUnit from '@components/units/SchoolUnit';
import Section from '@components/section/Section';
import WhyUs from '@components/why-us/WhyUs';
import Layout from '@components/layout/Layout';
import Seo from '@components/seo/Seo';

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
      </Layout>
      <WhyUs />
    </>
  );
}
