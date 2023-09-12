import TableHeading from '@components/table/table-heading/TableHeading';
import TableData from '@components/table/table-data/TableData';
import React from 'react';

const headingData = [
  'Payee Name',
  'Sort Code',
  'Account Number',
  'Payment Reference',
];

const tableData = [
  'Anders Army Polish School',
  '20-18-17',
  '63620956',
  'Imię i nazwisko dziecka\noraz numer miesiąca („Jan Kowalski 09”)',
];

export default function TableDesktop() {
  return (
    <table className="hidden md:inline-block border-l text-center font-light dark:border-neutral-500 mx-auto text-black">
      <thead className="border-t border-r border-b font-medium dark:border-neutral-500">
        <tr>
          {headingData.map((heading, index) => (
            <TableHeading key={index} styles="bg-gray-100">
              {heading}
            </TableHeading>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          {tableData.map((data, index) => (
            <TableData key={index}>{data}</TableData>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
