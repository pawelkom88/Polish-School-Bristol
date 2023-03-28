import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-full md:-mt-12 flex flex-col justify-center items-center text-center px-8 ">
      <Image
        className="hidden md:block absolute -left-12 top-14 animate-spin-slow"
        width={65}
        height={65}
        src="/star.svg"
        alt="star"
      />
      <Image
        className="hidden md:block absolute -right-12 top-8"
        width={85}
        height={85}
        src="/Cloud.svg"
        alt="star"
      />
      <Image
        className="my-4"
        width={220}
        height={220}
        src="/polish-flag.svg"
        alt="Logo"
      />
      <h1 className="xl:text-7xl text-4xl font-bold mb-7">Polska to my !</h1>
      <p className="text-lg xl:text-xl mb-2 py-4 md:px-8 ">
        Chcemy, aby nasi uczniowie poznali i pielęgnowali polskie tradycje i
        obyczaje, stając się ambasadorami kultury polskiej na świecie.
      </p>
    </section>
  );
}
