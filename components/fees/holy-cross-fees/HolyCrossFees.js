import { feesHolyCross } from '../../../data/data';
import TableHeading from '../../table-heading/TableHeading';
import TableData from '../../table-data/TableData';

export default function HolyCrossFees() {
  return (
    <div className="flex flex-col justify-start items-center">
      <p className="text-xl py-4 text-center text-[var(--btn1-clr)] font-bold">Holy Cross (Bedminster)</p>
      <table className="border text-center text-sm font-light dark:border-neutral-500">
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
