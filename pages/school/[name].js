import FAQ from '@components/faq/FAQ';
import Details from '@components/details/Details';
import { useRouter } from 'next/router';
import Seo from '@components/seo/Seo';
import { generatePageSEO } from '@config/seo';
import JsonLd from '@components/seo/JsonLd';
import { buildSchoolJsonLd } from '@config/seo';
import { Fragment } from 'react';

export default function School({ data }) {
  const router = useRouter();

  return (
    <>
      {data
        .filter((school) => school.name === router.query.name)
        .map((school) => {
          const singleSchoolPageSeo = generatePageSEO({
            canonical: router.asPath,
            url: router.asPath,
            title: `${school.name} - Polska Szkoła w ${school.location.address}`,
            description: `${school.name} to jedna z naszych dwóch szkół polskich w Bristolu. Oferujemy naukę języka polskiego, kultury i tradycji dla dzieci i młodzieży. Lokalizacja: ${school.location.address}.`,
            type: 'article',
            image: school.image,
          });

          return (
            <Fragment key={school.id}>
              <Seo seo={singleSchoolPageSeo} />
              <JsonLd data={buildSchoolJsonLd(school)} />
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
