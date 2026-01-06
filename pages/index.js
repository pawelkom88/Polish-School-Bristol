import Hero from '@components/hero/Hero';
import History from '@components/history/History';
import Layout from '@components/layout/Layout';
import Section from '@components/section/Section';
import Seo from '@components/seo/Seo';
import JsonLd from '@components/seo/JsonLd';
import { buildWebsiteJsonLd, buildOrganizationJsonLd, SITE_CONFIG } from '@config/seo';
import SchoolUnit from '@components/units/SchoolUnit';
import WhyUs from '@components/why-us/WhyUs';
import Support from '@components/financial-support/support';

export default function Home() {
  const websiteJsonLd = buildWebsiteJsonLd({ siteUrl: SITE_CONFIG.url });
  const organizationJsonLd = buildOrganizationJsonLd({ sameAs: [] });
  return (
    <>
      <Seo />
      <JsonLd data={[websiteJsonLd, organizationJsonLd]} />
      <Layout>
        <Hero />
        <SchoolUnit />
        <Section title="Historia SZKOŁY">
          <History />
        </Section>
          <Support />
      {/*<Link href="/signup">*/}
      {/*  <Image src={plakat} alt="plakat" />*/}
      {/*</Link>*/}
      </Layout>
      <WhyUs />
    </>
  );
}
