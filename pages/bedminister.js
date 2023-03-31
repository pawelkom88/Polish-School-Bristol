import FAQ from '../components/faq/FAQ';
import Map from '../components/map/Map';
import Details from '../components/details/Details';

export default function Bedminister({ data }) {
  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_BEDMINISTER,
    tel: process.env.NEXT_PUBLIC_TEL_BEDMINISTER,
  };
console.log(data)
  return (
    <>
      <main>
        <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
          <Details data={data[0]} contact={contact} />
          <Map location={data[0].location} />
        </article>
        <FAQ data={data[0]} />
      </main>
    </>
  );
}
