import TableHeading from '../table-heading/TableHeading';
import TableData from '../table-data/TableData';
export default function TableDesktop({}) {
  return (
    <table className="hidden md:inline-block border-l text-center text-sm font-light dark:border-neutral-500 mx-auto">
      <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
        <TableHeading styles="bg-gray-100">Payee Name</TableHeading>
        <TableHeading styles="bg-gray-100">Sort Code</TableHeading>
        <TableHeading styles="bg-gray-100">Account Number</TableHeading>
        <TableHeading styles="bg-gray-100">Payment Reference</TableHeading>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <TableData>Anders Army Polish School</TableData>
          <TableData>20-18-17</TableData>
          <TableData>63620956</TableData>
          <TableData>
            Imię i nazwisko dziecka
            <br /> oraz numer miesiąca („Jan Kowalski 09”)
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}
