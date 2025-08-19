import News from '@components/news/News';
import Image from 'next/image';
import projekt from '@public/projekt.jpg';
import projekt2 from '@public/projekt2.jpg';
import { grant1, grant2 } from '@components/news/data';

export default function History() {
  return (
    <div className="max-w-7xl md:mt-18 mt-24 mx-auto px-4 text-lg text-justify md:text-left text-pretty">
      <h2 className="xl:text-5xl text-4xl text-center font-bold mb-7">
        Dofinansowania
      </h2>
      <News index={1} details={grant1} />
      <br />
      <hr className="my-6 mx-auto max-w-[90%] border-gray-300" />
      <br />
      <News index={2} details={grant2} />
      <Image
        className="m-auto"
        width={800}
        height={800}
        src={projekt}
        alt="flaga oraz godlo Polski wraz z tytulem projektu"
      />
      <br />
      <Image
        className="m-auto"
        width={800}
        height={800}
        src={projekt2}
        alt="??"
      />
    </div>
  );
}
