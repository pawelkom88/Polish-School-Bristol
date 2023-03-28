import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/Button';

export default function SchoolCard({ data }) {
  const bedminister =
    'bg-btn1-clr hover:bg-primary-clr px-4 py-2 rounded-lg text-white hover:text-gray-900 mr-2 mb-2 border-2 border-btn1-clr border-solid';

  const oasis =
    'bg-btn2-clr hover:bg-primary-clr px-4 py-2 rounded-lg text-white hover:text-gray-900 mr-2 mb-2 border-2 border-btn2-clr border-solid';

  return (
    <div
      className={`${
        data.id === 'Bedminister' ? 'bg-bg2-clr' : 'bg-bg1-clr'
      } w-full flex items-center justify-center `}
    >
      <div className="relative w-full h-full flex flex-col items-center py-6 px-4 rounded-lg border-2">
        <Image
          className="my-6"
          src={data.cardIcon}
          width={60}
          height={60}
          alt="Icon"
        />
        <div
          className={`${data.id === 'Bedminister' ? 'tape' : 'tape2'} mb-2`}
        ></div>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl">{data.id}</p>
            <p className="my-4 text-xs sm:text-sm md:text-base font-semibold text-center">
              {data.location.address}
            </p>
            <Link href={`/${data.link}`}>
              <Button
                className={`${data.id === 'Bedminister' ? bedminister : oasis}`}
              >
                więcej
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
