import TableHeading from '@components/table/table-heading/TableHeading';
import { generalFees } from '@data/data';

export default function Fees({ schoolName }) {
  console.log(schoolName);

  return (
    <section className="w-full mb-4">
      <p className="text-xl font-bold py-4">
        Czesne na rok szkolny 2022/2023 wynosi:
      </p>
      <table className="w-full bg-white text-gray-900 lg:w-1/2 border text-md font-light dark:border-neutral-500 my-4">
        <thead>
          <tr className="flex flex-col gap-2">
            <TableHeading
              styles={`${
                schoolName !== 'Oasis' ? 'bg-btn1-clr' : 'bg-btn2-clr'
              } border-b text-lg text-white`}
            >
              Opłata za jedną sobotę
            </TableHeading>
            {generalFees.map((fee) => {
              return (
                <TableHeading key={fee.id} styles="border-b font-light">
                  {fee.price}
                </TableHeading>
              );
            })}
          </tr>
        </thead>
      </table>
    </section>
  );
}
