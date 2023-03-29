import FAQ from '../components/faq/FAQ';
import Map from '../components/map/Map';
import Details from '../components/details/Details';

export default function Bedminister({ data }) {
  const { id, name, location, content, socialMedia, topBarClass } = data[0];

  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_BEDMINISTER,
    tel: process.env.NEXT_PUBLIC_TEL_BEDMINISTER,
  };

  return (
    <>
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
    </>
  );
}
