import Link from 'next/link';
import Button from '../button/Button';

export default function Hero() {
  return (
    <>
      <section className="max-w-7x h-full -mt-12 md:mt-0 flex flex-col justify-center text-center lg:flex-row md:justify-center md:items-center 2xl:px-80 px-8 ">
        <div>
          <h1 className="xl:text-6xl text-4xl font-bold mb-7">
            Polska Szkoła Języka i Kultury w{' '}
            <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              Bristolu
            </span>
          </h1>
          <p className="text-lg xl:text-2xl mb-7 py-4 md:px-8 ">
            Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie
            tradycje i obyczaje, stając się ambasadorami kultury polskiej na
            świecie.
          </p>
          <Link href="/bedminister">
            <Button className="bg-btn1-clr hover:bg-primary-clr px-4 py-2 rounded-lg text-white hover:text-gray-900 mr-2 mb-2 border-2 border-btn1-clr border-solid">
              Bedminister
            </Button>
          </Link>
          <Link href="/oasis">
            <Button className="bg-btn2-clr hover:bg-primary-clr px-4 py-2 rounded-lg text-white hover:text-gray-900 mr-2 mb-2 border-2 border-btn2-clr border-solid">
            Lawrence Weston
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}


