import Link from 'next/link';
import Image from 'next/image';

export default function SchoolCard({ data }) {
  const schoolName = data.name !== 'Oasis';

  return (
    <div
      className={`${
        schoolName ? 'bg-bg2-clr' : 'bg-bg1-clr'
      } w-full flex items-center justify-center rounded-lg`}
    >
      <div className="relative w-full h-full flex flex-col items-center py-6 px-4">
        <Image
          className="my-6"
          src={data.cardIcon}
          width={180}
          height={180}
          alt="Icon"
        />
        <div className={`${schoolName ? 'tape' : 'tape2'} mb-2`}></div>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl">{data.name}</p>
            <p className="my-4 text-xs sm:text-sm md:text-base font-semibold text-center">
              {data.location.address}
            </p>
            <Link
              href={`/school/${data.name}`}
              className={`${schoolName ? 'btn-green' : 'btn-blue'}`}
            >
              więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
