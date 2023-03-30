import TableHeading from '../table-heading/TableHeading';

export default function Fees() {
  return (
    <section className="w-full mb-4">
      <p className="text-xl text-center font-bold py-4">
        Czesne na rok szkolny 2022/2023 wynosi:
      </p>
      <table className="sm:w-1/3 w-full border text-center text-sm font-light dark:border-neutral-500 m-auto">
        <thead>
          {/* MAP !!!! */}
          <tr className="flex flex-col gap-2">
            <TableHeading styles="bg-gray-100 border-b text-lg">
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
