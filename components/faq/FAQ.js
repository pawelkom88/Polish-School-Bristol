import React from 'react';
import FaqAnswer from '../faq-answer/FaqAnswer';
import Link from 'next/link';
import Fees from '../fees/Fees';
import FeesDescription from '../fees/fees-description/FeesDescription';
import FeesInfo from '../fees/fees-info/FeesInfo';
import TableMobile from '../table/TableMobile';
import TableDesktop from '../table/TableDesktop';
import { bedminister, oasis } from '../../utils/utils';
import SchoolFees from '../fees/school-fees/SchoolFees';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function FAQ({ data }) {
  return (
    <section className="min-h-[80vh] flex justify-center items-center bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h4 className="text-4xl font-semibold text-white">
          Pytania i odpowiedzi
        </h4>
        <hr className="my-6 border-gray-700" />
        {/* // map */}
        <FaqAnswer title="Nasza Załoga">
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
            href="/"
            className={`${data.id === 'Bedminister' ? bedminister : oasis}`}
          >
            Poznaj naszą kadrę
          </Link>
        </FaqAnswer>

        <hr className="my-8  border-gray-700" />

        <FaqAnswer title="Płatności">
          <Fees schoolName={data.id} />
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

        <hr className="my-8  border-gray-700" />
        <FaqAnswer title="Wydarzenia">
          

<EmbedPDF>
  <a href={data.id === 'Bedminister'
            ? 'files/KalendarzOasis.pdf'
            : '/files/KalendarzHolyCross.pdf'}>
    Opens dummy.pdf
  </a>
</EmbedPDF>
        </FaqAnswer>

        {/* <hr className="my-8  border-gray-700" /> */}
      </div>
    </section>
  );
}
