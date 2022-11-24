import Navigation from '../components/navigation/Navigation';
import FAQ from '../components/faq/FAQ';
import Map from '../components/map/Map';
import Details from '../components/details/Details';
import Footer from '../components/footer/Footer';

export default function Oasis({ data }) {
  const { id, name, location, content, socialMedia, topBarClass } = data[1];

  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_OASIS,
    tel: process.env.NEXT_PUBLIC_TEL_OASIS,
  };

  return (
    <>
      <Navigation />
      <main>
        <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
          <Details
            id={id}
            name={name}
            content={content}
            location={location}
            contact={contact}
            socialMedia={socialMedia}
            topBarClass={topBarClass}
          />
          <Map location={location} />
        </article>
        <FAQ />
      </main>
      <Footer socialMedia={socialMedia} />
    </>
  );
}
