import TableHeading from '../table/table-heading/TableHeading';

export default function Fees({ schoolName }) {
  return (
    <section className="w-full mb-4">
      <p className="text-xl font-bold py-4">
        Czesne na rok szkolny 2022/2023 wynosi:
      </p>
      <table className="w-1/2 border text-md font-light dark:border-neutral-500 my-4">
        <thead>
          {/* MAP !!!! */}
          <tr className="flex flex-col gap-2">
            <TableHeading
              styles={`${
                schoolName !== 'Oasis' ? 'bg-btn1-clr' : 'bg-btn2-clr'
              } border-b text-lg`}
            >
              Opłata za jedną sobotę
            </TableHeading>
            <TableHeading styles="border-b font-light">
              £14 za pierwsze dziecko
            </TableHeading>
            <TableHeading styles="border-b font-light">
              £10 za drugie dziecko
            </TableHeading>
            <TableHeading styles="border-b font-light">
              £7 za trzecie dziecko
            </TableHeading>
            <TableHeading styles="font-light">
              £0 za czwarte i kolejne dziecko
            </TableHeading>
          </tr>
        </thead>
      </table>
    </section>
  );
}
