import Seo from '@components/seo/Seo';
import Layout from '@components/layout/Layout';
import Icon from '@components/icons/Icon';
import Form from '@components/form/Form';
import Image from 'next/image';

const currentYear = new Date().getFullYear();

const documentsPageSeo = {
  canonical: 'https://polishschoolbristol.com/documents',
  url: 'https://polishschoolbristol.com/documents',
  title: 'Wszystkie potrzebne dokumenty do rekrutacji',
  description: `Informacje o rekrutacji na rok ${currentYear} w polskiej szkoły w Bristolu.`,
};

export default function Documents() {
  return (
    <>
      <Seo seo={documentsPageSeo} />
      <Layout>
          <h1 className="xl:text-5xl text-3xl font-bold">DOKUMENTY</h1>
          <p>kliknij w ikonę, aby pobrać dokument</p>
        <ul className="text-md md:text-lg list-inside leading-10 my-4 text-center">
          <li>
            <a
              className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
              href="https://ps-bristol.netlify.app/files/RegulaminPSJiK2025-2026.pdf"
            >
              <Image
                className="mx-auto my-8"
                width={70}
                height={150}
                src="/icons/award-certificate.svg"
                alt="statute icon"
              />
            </a>
          </li>
          <li className="list-img">
            <span className="pl-2">
              Regulamin szkoły
            </span>
          </li>

          <li>
            <a
              className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
              href="https://ps-bristol.netlify.app/files/Upowaznienie-do-odbioru-dziecka-lub-samodzielnego-opuszczania-terenu-szkoły.pdf"
            >
              <Image
                className="mx-auto my-8"
                width={70}
                height={150}
                src="/icons/authority.svg"
                alt="statute icon"
              />
            </a>
          </li>
          <li className="list-img">
            <span className="pl-2">
              Upoważnienie do odbioru dziecka lub samodzielnego opuszczania
              terenu szkoły
            </span>
          </li>

          <li>
            <a
              className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
              href="https://ps-bristol.netlify.app/files/formularzzgłoszeniowyPSJiK.pdf"
            >
              <Image
                className="mx-auto my-8"
                width={70}
                height={150}
                src="/icons/form.svg"
                alt="form icon"
              />
            </a>
          </li>
          <li className="list-img">
            <span className="pl-2">
              Formularz zgłoszeniowy
              pobrać
            </span>
          </li>



          <li>
            <a
              className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
              href="https://ps-bristol.netlify.app/files/Podstawa-programowa-dla-szkol-polonijnych-w-jezyku-polskim.pdf"
            >
              <Image
                className="mx-auto my-8"
                width={70}
                height={150}
                src="/icons/documents.svg"
                alt="form icon"
              />
            </a>
          </li>
          <li className="list-img">
            <span className="pl-2">
              Podstawa programowa
            </span>
          </li>

        </ul>
      </Layout>
    </>
  );
}
