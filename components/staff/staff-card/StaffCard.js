export default function StaffCard({}) {
  const cardWidth = 'w-[20rem]';

  return (
    <a href="" className="group relative block h-64 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div
        className={`${cardWidth} relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">imie</h2>
        </div>
        <div
          className={`${cardWidth} absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8`}
        >
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            cos smiesznego + drugie zdj
          </h3>
          <p className="mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            praesentium voluptatem omnis atque culpa repellendus.
          </p>
        </div>
      </div>
    </a>
  );
}
