import Image from 'next/image';
import Layout from '../components/layout/Layout';

export default function Signup() {
  return (
    <Layout>
      <h1 className="xl:text-5xl text-3xl font-bold mb-12">
        JAK ZAPISAĆ DZIECKO ?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center item-start gap-8">
        <div className="lg:min-h-[40rem] lg:mt-24">
          <a
            className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
            href=""
          >
            <Image
              className="mx-auto"
              width={100}
              height={200}
              src="/icons/form.png"
              alt="form icon"
            />
          </a>
          <div>
            <ul className="text-md md:text-lg list-inside leading-10 my-4">
              <li className="list-img">
                <span className="pl-2">
                  Pobierz formularz zgłoszeniowy oraz regulamin szkoły klikając
                  w powyższą ikonę.
                </span>
              </li>
              <li className="list-img">
                <span className="pl-2">Zapoznaj się z regulaminem szkoły</span>
              </li>
              <li className="list-img">
                <span className="pl-2">
                  Wypełnij formularz zgłoszeniowy i podpisz.
                </span>
              </li>
              <li className="list-img">
                <span className="pl-2">
                  Wyślij na
                  <a
                    style={{ color: '#3d992b', fontWeight: 'bold' }}
                    href="mailto:PolishSchoolBristol@gmail.com"
                  >
                    PolishSchoolBristol@gmail.com
                  </a>{' '}
                  /{' '}
                  <a
                    style={{ color: '#5d90ee', fontWeight: 'bold' }}
                    href="mailto:PolishSchoolBristol2@gmail.com"
                  >
                    PolishSchoolBristol2@gmail.com
                  </a>{' '}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:basis-1/3">
          <Image
            className="w-full"
            src="/signup-img.png"
            width={650}
            height={600}
            alt="School icon"
          />
        </div>
      </div>
    </Layout>
  );
}
