import TableHeading from '@components/table/table-heading/TableHeading';
import TableData from '@components/table/table-data/TableData';

export default function TableMobile({}) {
  return (
    <>
      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Payee Name</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>Anders Army Polish School</TableData>
          </tr>
        </tbody>
      </table>

      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto my-2">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Sort Code</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>20-18-17</TableData>
          </tr>
        </tbody>
      </table>

      <table className="w-full md:hidden border-l text-black  text-center font-light dark:border-neutral-500 mx-auto my-2">
        <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
          <TableHeading styles="bg-gray-100">Account Number</TableHeading>
        </thead>
        <tbody>
          <tr className="border-b text-lg dark:border-neutral-500">
            <TableData>63620956</TableData>
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
