import FAQ from '@components/faq/FAQ';
import Map from '@components/map/Map';
import Details from '@components/details/Details';
import { useRouter } from 'next/router';
import Seo from '@components/seo/Seo';
import { Fragment } from 'react';

export default function School({ data }) {
  const router = useRouter();

  return (
    <>
      {data
        .filter((school) => school.name === router.query.name)
        .map((school) => {
          return (
            <Fragment key={school.id}>
              <Seo seo={school.seo} />
              <main>
                <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
                  <Details data={school} />
                  <Map location={school.location} />
                </article>
                <FAQ data={school} />
              </main>
            </Fragment>
          );
        })}
    </>
  );
}
