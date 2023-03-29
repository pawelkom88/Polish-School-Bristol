import Image from 'next/image';
import React from 'react';

export default function Card({ card }) {
  return (
    <div
      style={{ backgroundColor: card.bgColor }}
      className="w-full lg:w-[13rem] h-[14rem] md:h-[17rem] p-4 rounded-lg border-solid border px-10 sm:px-0 md:hover:-translate-y-5 transition-transform duration-500"
    >
      <div className="w-1/2 h-[110px] mx-auto">
        <Image
          className="w-full h-full"
          src={card.src}
          width={65}
          height={70}
          alt="icon"
        />
      </div>

      <h3 className="text-lg text-center my-2">{card.title}</h3>
    </div>
  );
}
