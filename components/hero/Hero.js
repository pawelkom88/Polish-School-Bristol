import Icon from '../icons/Icon';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-full -mt-16 md:-mt-12 flex flex-col justify-center items-center text-center">
      <Icon
        src="/cloud.svg"
        size={{ width: 85, height: 85 }}
        position="-right-8 top-8"
      />
      <Icon
        src="/star.svg"
        size={{ width: 65, height: 65 }}
        position="-left-12 top-24"
        animate={true}
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
