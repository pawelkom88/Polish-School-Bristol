import TableData from '@components/table/table-data/TableData';
import TableHeading from '@components/table/table-heading/TableHeading';
import { tableDataBedminister, tableDataOasis } from '@data/data';

export default function TableMobile({ school }) {
  const tableData = school === 'Oasis' ? tableDataOasis : tableDataBedminister;
  const [schoolName, sortCode, accountNumber] = tableData;

  return (
    <>
      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Payee Name</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>{schoolName}</TableData>
          </tr>
        </tbody>
      </table>

      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto my-2">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Sort Code</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>{sortCode}</TableData>
          </tr>
        </tbody>
      </table>

      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto my-2">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Account Number</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>{accountNumber}</TableData>
          </tr>
        </tbody>
      </table>

      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto my-2">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Payment Reference</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>
              Imię i nazwisko dziecka oraz numer
              <br /> miesiąca („Jan Kowalski 09”)
            </TableData>
          </tr>
        </tbody>
      </table>
    </>
  );
}
