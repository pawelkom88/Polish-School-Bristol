import FAQ from '../../components/faq/FAQ';
import Map from '../../components/map/Map';
import Details from '../../components/details/Details';
import { useRouter } from 'next/router';

export default function School({ data }) {
  const router = useRouter();

  const contact = {
    eMail: process.env.NEXT_PUBLIC_MAIL_BEDMINISTER,
    tel: process.env.NEXT_PUBLIC_TEL_BEDMINISTER,
  };


  return (
    <>
      {data
        .filter((school) => school.name === router.query.name)
        .map((school) => {
          return (
            <main key={school.id}>
              <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
                <Details data={school} contact={contact} />
                <Map location={school.location} />
              </article>
              <FAQ data={school} />
            </main>
          );
        })}
    </>
  );
}
