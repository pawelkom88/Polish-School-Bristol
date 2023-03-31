import Image from 'next/image';
import SchoolCard from '../card/SchoolCard';
import { schoolData } from '../../data/data.js';

export default function SchoolUnit() {
  return (
    <section className="w-full flex flex-col justify-center items-center my-8">
      <p className="text-lg xl:text-xl text-center mb-4">
        Podaruj swojemu dziecko dwujęzyczność i zapisz je do jednej z naszych
        placówek:
      </p>
      <div className="relative w-full h-12 xl:block hidden">
        <div className="absolute top-0 left-[198px]">
          <Image
            width={400}
            height={200}
            src="/background-left-buckle-long.svg"
            alt="line"
          />
        </div>
        <div className="absolute top-0 right-[198px]">
          <Image
            width={400}
            height={200}
            src="/background-right-buckle-long.svg"
            alt="line"
          />
        </div>
      </div>
      <div className="relative w-full grid  md:grid-flow-col auto-cols-fr gap-5 px-2">
        {schoolData.map((school) => {
          return (
            <SchoolCard
              key={school.id}
              data={school.name !== 'Oasis' ? schoolData[0] : schoolData[1]}
            />
          );
        })}
      </div>
    </section>
  );
}
