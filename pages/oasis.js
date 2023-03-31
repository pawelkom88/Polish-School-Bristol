import FAQ from '../components/faq/FAQ';
import Map from '../components/map/Map';
import Details from '../components/details/Details';

export default function Oasis({ data }) {
  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_OASIS,
    tel: process.env.NEXT_PUBLIC_TEL_OASIS,
  };

  return (
    <>
      <main>
        <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
          <Details data={data[1]} contact={contact} />
          <Map location={data[1].location} />
        </article>
        <FAQ data={data[1]} />
      </main>
    </>
  );
}
