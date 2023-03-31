import { feesHolyCross } from '../../../data/data';
import TableHeading from '../../table/table-heading/TableHeading';
import TableData from '../../table/table-data/TableData';

export default function SchoolFees({ schoolName }) {
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-xl py-4 text-center text-white font-bold">
        {schoolName}
      </p>
      <table className="border text-center text-sm text-black font-light dark:border-neutral-500">
        <thead className="border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">#</TableHeading>
          <TableHeading styles="bg-gray-100"> Termin Platności</TableHeading>
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
  );
}
