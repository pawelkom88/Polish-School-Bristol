import { feesOasis } from '../../../data/data';
import TableHeading from '../../table-heading/TableHeading';
import TableData from '../../table-data/TableData';
import Icon from '../../icons/Icon';

export default function OasisFees() {
  return (
    <div className="relative flex flex-col justify-start items-center">
      <p className="text-xl py-4 text-center text-[var(--btn2-clr)] font-bold">
        Oasis Academy Bank Leaze (Lawrence Weston)
      </p>

      <table className="border text-center text-sm font-light dark:border-neutral-500">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <TableHeading styles="bg-gray-100">#</TableHeading>
            <TableHeading styles="bg-gray-100"> Termin Platności</TableHeading>
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
  );
}
