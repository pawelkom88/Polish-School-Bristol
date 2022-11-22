import Navigation from '../components/navigation/Navigation';
import FAQ from '../components/faq/FAQ';
import Map from '../components/map/Map';
import Footer from '../components/footer/Footer';
import Details from '../components/details/Details';

export default function Bedminister({ data }) {
  const { name, location, content, socialMedia } = data[0];

  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_BEDMINISTER,
    tel: process.env.NEXT_PUBLIC_TEL_BEDMINISTER,
  };

  return (
    <>
      <Navigation />
      <main>
        <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
          <Details
            name={name}
            content={content}
            location={location}
            contact={contact}
            socialMedia={socialMedia}
          />
          <Map location={location} />
        </article>
        <FAQ />
      </main>
      <Footer socialMedia={socialMedia} />
    </>
  );
}
