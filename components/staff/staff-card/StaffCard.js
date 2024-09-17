import Icon from '@components/icons/Icon';
import Image from 'next/image';
import { useState } from 'react';
import placeholder from '../../../public/polish-flag.webp';

export default function StaffCard({ teacherInfo }) {
  const [isHoverd, setIsHovered] = useState(false);
  const cardWidth = 'w-[20rem]';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block h-96"
    >
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>
      {teacherInfo.role === 'Head Teacher' && (
        <Icon
          src="/icons/crown.svg"
          size={{ width: 85, height: 85 }}
          position={`left-[39%] -top-[4rem] ${
            isHoverd ? 'animate-bounce' : ''
          }`}
        />
      )}
      <div
        className={`${cardWidth} relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <div className="w-full h-full !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 ">
          <Image
            className="w-full h-[65%] object-cover"
            src={teacherInfo.photo || placeholder}
            width={300}
            height={350}
            alt={teacherInfo.name}
          />
          <h2 className="mt-4 text-center text-xl font-medium">
            {teacherInfo.name}
          </h2>
          <p className="text-center">{teacherInfo.role}</p>
        </div>
        <div
          className={`${cardWidth} h-full absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100`}
        >
          <Image
            className="w-full h-[65%] object-cover"
            src={teacherInfo.photo || placeholder}
            width={300}
            height={350}
            alt={teacherInfo.name}
          />
          <p className="p-2 text-base">{teacherInfo.desc}</p>
        </div>
      </div>
    </div>
  );
}
