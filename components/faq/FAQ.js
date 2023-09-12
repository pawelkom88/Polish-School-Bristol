import React from 'react';
import FaqAnswer from '@components/faq-answer/FaqAnswer';
import Link from 'next/link';
import Fees from '@components/fees/Fees';
import FeesDescription from '@components/fees/fees-description/FeesDescription';
import FeesInfo from '@components/fees/fees-info/FeesInfo';
import TableMobile from '@components/table/TableMobile';
import TableDesktop from '@components/table/TableDesktop';
import SchoolFees from '@components/fees/school-fees/SchoolFees';
import Map from '@components/map/Map';

export default function FAQ({ data }) {
  const mainColor = data.name !== 'Oasis' ? 'green' : 'blue';

  return (
    <section className="min-h-[60vh] flex justify-center items-center border">
      <div className="container px-6 py-10 mx-auto">
        <h4 className="text-4xl font-semibol">Informacje</h4>
        <hr className="my-6 border-gray-700" />
        <FaqAnswer mainColor={mainColor} title="Nasza Załoga">
          <p>
            Nasi nauczyciele posiadają wykształcenie i doświadczenie w nauczania
            i pracy dziećmi polonijnymi. Szkoła zapewnia wszystkim nauczycielom
            oraz asystentom kursy i szkolenia zawodowe, rozwijające umiejętności
            niezbędne w szkole polonijnej i pracy z dziećmi dwujęzycznymi. Kadra
            pedagogiczna to wizytówka naszej szkoły. Z zaangażowaniem, pasją i
            wielką motywacją nasi nauczyciele przygotowują zajęcia, które
            zainteresują nawet największego sceptyka! Oferujemy naukę poprzez
            gry, zabawy oraz liczne aktywności w przyjaznej i stymulującej
            atmosferze. Dokładamy wszelkich starań, aby dzieci czuły się
            akceptowane, bezpieczne i chętnie uczestniczyły w naszych zajęciach.
            Wasze dziecko będzie uczyło się języka i kultury polskiej w sposób
            kreatywny, poprzez doświadczenia i przy użyciu technologii XXI
            wieku.
          </p>
          <br />
          <Link
            href={`/staff/${data.name}`}
            className={`${data.name !== 'Oasis' ? 'btn-green' : 'btn-blue'}`}
          >
            Poznaj naszą kadrę
          </Link>
        </FaqAnswer>
        <hr className="my-8 border-gray-700" />
        <FaqAnswer mainColor={mainColor} title="Płatności">
          <Fees schoolName={data.name} />
          <FeesDescription />
          <SchoolFees schoolName={data.name} />
          <p className="py-4">
            Opłaty za szkołę należy uiszczać na konto szkoły lub gotówką u
            Dyrekcji Szkoły.
          </p>
          <TableDesktop />
          <TableMobile />
          <br />
          <FeesInfo />
        </FaqAnswer>
        <hr className="my-8 border-gray-700" />
        <FaqAnswer mainColor={mainColor} title="Wydarzenia">
          <a
            href={
              data.id === 'Bedminister'
                ? process.env.NEXT_PUBLIC_CALENDAR_OASIS
                : process.env.NEXT_PUBLIC_CALENDAR_BEDMINISTER
            }
          >
            Pobierz kalendarz w formacie PDF
          </a>
        </FaqAnswer>
        <hr className="my-8 border-gray-700" />

        <FaqAnswer mainColor={mainColor} title="Znajdź nas">
          <Map location={data.location} />
        </FaqAnswer>
      </div>
    </section>
  );
}
