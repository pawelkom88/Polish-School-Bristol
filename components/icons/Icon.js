import Image from 'next/image';

export default function Icon({ src,size, position, animate = false }) {
  return (
    <Image
      className={`hidden md:block absolute ${position} ${
        animate ? 'animate-spin-slow' : ''
      }`}
      width={size.width}
      height={size.height}
      src={src}
      alt="icon"
    />
  );
}
