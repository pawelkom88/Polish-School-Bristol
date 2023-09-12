import FAQ from '@components/faq/FAQ';
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
          const singleSchoolPageSeo = {
            canonical: `${router.asPath}`,
            url: `${router.asPath}`,
            title: `${school.name} School - ${school.location.address}`,
            description: `${school.name} School  jest jedna z naszych dwoch szkol w Bristolu. `,
          };

          return (
            <Fragment key={school.id}>
              <Seo seo={singleSchoolPageSeo} />
              <main>
                <article className="min-h-[50vh] max-w-7xl mx-auto md:mt-16 mt-4">
                  <Details data={school} />
                  <br />
                  <FAQ data={school} />
                </article>
              </main>
            </Fragment>
          );
        })}
    </>
  );
}
