import Image from 'next/image';
import Card from '../card/Card';
import data from '../../data/data.json';

export default function SchoolUnit() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-8 px-10">
      <p className="text-lg xl:text-xl text-center mb-4">
        Zapisz swoje dziecko do jednej z naszych placowek:
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
      <div className="relative w-full grid  md:grid-flow-col auto-cols-fr gap-5">
        {/* <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-5"> */}
        {data.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
}
