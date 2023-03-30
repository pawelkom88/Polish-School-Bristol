import TableHeading from '../components/table-heading/TableHeading';
import TableData from '../components/table-data/TableData';
import Icon from '../components/icons/Icon';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { feesHolyCross, feesOasis } from '../data/data';

export default function Signup() {
  return (
    <Layout>
      <div className="flex justify-center items-center gap-4 mb-12">
        <h1 className="xl:text-5xl text-3xl font-bold">
          JAK ZAPISAĆ DZIECKO ?
        </h1>
        <Image
          className="hidden xl:block"
          width={40}
          height={40}
          src="/icons/Heart.svg"
          alt="flower"
        />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center item-start gap-4 xl:gap-8">
        <div className="lg:min-h-[30rem] lg:mt-24">
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
                  Wyślij na{' '}
                  <a
                    style={{ color: '#3d992b', fontWeight: 'bold' }}
                    href="mailto:PolishSchoolBristol@gmail.com"
                  >
                    PolishSchoolBristol@gmail.com
                  </a>{' '}
                  lub{' '}
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
            src="/Graduation-bro.svg"
            width={720}
            height={514}
            alt="School icon"
          />
          <a className="hidden" href="https://storyset.com/education">
            Education illustrations by Storyset
          </a>
        </div>
      </section>

      <div className="relative">
        <h2 className="xl:text-5xl text-3xl font-bold mb-12 text-center mt-24 md:mt-0">
          PŁATNOŚCI
        </h2>

        <Icon
          src="/icons/Flower.svg"
          size={{ width: 45, height: 45 }}
          position="left-20 top-0"
          animate={true}
        />

        <Image
          className="mb-8"
          src="/teacher-bro.svg"
          width={550}
          height={350}
          alt="School icon"
        />
        <a className="hidden" href="https://storyset.com/education">
          Education illustrations by Storyset
        </a>
      </div>

      <section className="w-full mb-4">
        <p className="text-xl text-center font-bold py-4">
          Czesne na rok szkolny 2022/2023 wynosi:
        </p>
        <table className="sm:w-1/3 w-full border text-center text-sm font-light dark:border-neutral-500 m-auto">
          <thead>
            <tr className="flex flex-col gap-2">
              <TableHeading styles="bg-gray-100 border-b text-lg">
                Opłata za jedną sobotę
              </TableHeading>
              <TableHeading styles="border-b">
                £14 za pierwsze dziecko
              </TableHeading>
              <TableHeading styles="border-b">
                £10 za drugie dziecko
              </TableHeading>
              <TableHeading styles="border-b">
                £7 za trzecie dziecko
              </TableHeading>
              <TableHeading>£0 za czwarte i kolejne dziecko</TableHeading>
            </tr>
          </thead>
        </table>
      </section>

      <div className="xl:px-8 text-lg text-center my-4">
        <p>
          Przy zapisie dziecka należy uiścić jednorazową opłatę wpisową w
          wysokości <span className="font-bold">£15</span> na pokrycie kosztów
          administracyjnych. Opłata jest bezzwrotna.
        </p>
        <br />
        <p>
          Opłaty za naukę w Polskiej Szkole pobierane są miesięcznie z góry,
          płatne do pierwszej soboty danego miesiąca, w którą odbywają się
          zajęcia, za ilość sobót, przypadających w danym miesiącu:
        </p>
      </div>

      <div className="relative w-full h-12 xl:block hidden">
        <div className="absolute top-0 left-[225px]">
          <Image
            width={400}
            height={200}
            src="/background-left-buckle-long.svg"
            alt="line"
          />
        </div>
        <div className="absolute top-0 right-[225px]">
          <Image
            width={400}
            height={200}
            src="/background-right-buckle-long.svg"
            alt="line"
          />
        </div>
      </div>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center item-start mb-4">
        <div className="flex flex-col justify-start items-center">
          <p className="text-lg py-4 text-center">
            Oasis Academy Bank Leaze (Lawrence Weston)
          </p>
          <table className="border text-center text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <TableHeading styles="bg-gray-100">#</TableHeading>
                <TableHeading styles="bg-gray-100">
                  {' '}
                  Termin Platności
                </TableHeading>
                <TableHeading styles="bg-gray-100">
                  Ilość Sobót w miesiącu
                </TableHeading>
              </tr>
            </thead>
            <tbody>
              {feesOasis.map(({ id, paymentDate, period }) => {
                return (
                  <tr key={id} className="border-b dark:border-neutral-500">
                    <TableData>{id}</TableData>
                    <TableData>{paymentDate}</TableData>
                    <TableData>{period}</TableData>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-start items-center">
          <p className="text-lg py-4 text-center">Holy Cross (Bedminster)</p>
          <table className="border text-center text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <TableHeading styles="bg-gray-100">#</TableHeading>
              <TableHeading styles="bg-gray-100">
                {' '}
                Termin Platności
              </TableHeading>
              <TableHeading styles="bg-gray-100">
                Ilość Sobót w miesiącu
              </TableHeading>
            </thead>
            <tbody>
              {feesHolyCross.map(({ id, paymentDate, period }) => {
                return (
                  <tr key={id} className="border-b dark:border-neutral-500">
                    <TableData>{id}</TableData>
                    <TableData>{paymentDate}</TableData>
                    <TableData>{period}</TableData>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
