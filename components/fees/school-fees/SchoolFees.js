import { feesHolyCross, feesOasis } from '@data/data';
import TableHeading from '@components/table/table-heading/TableHeading';
import TableData from '@components/table/table-data/TableData';

export default function SchoolFees({ schoolName }) {
  const fees = schoolName !== 'Oasis' ? feesHolyCross : feesOasis;

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-xl py-4 text-center text-white font-bold">
        {schoolName}
      </p>
      <table className="w-full md:w-2/3 border text-center dark:border-neutral-500">
        <thead className="border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">#</TableHeading>
          <TableHeading styles="bg-gray-100"> Termin Platności</TableHeading>
          <TableHeading styles="bg-gray-100">
            Ilość Sobót w miesiącu
          </TableHeading>
        </thead>
        <tbody>
          {fees.map(({ id, paymentDate, period }) => {
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
  );
}
