import Card from '@components/card/Card';
import { cardData } from '@data/cardData';
import Image from 'next/image';

export default function WhyUs() {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <h2 className="xl:text-5xl text-4xl text-center font-bold mt-16 mb-8 ">
        Dlaczego my ?
      </h2>
      <div className="max-w-7xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4">
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div className="w-full min-h-[0rem] lg:min-h-[40rem] md:bg-auto  bg-white md:bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('/why-usoverlay.webp')] bg-cover"></div>
    </div>
  );
}
