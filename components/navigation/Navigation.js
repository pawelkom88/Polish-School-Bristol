import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  return (
    <nav className="sm:max-w-7xl flex items-center justify-between py-6    xl:px-0 bg-secondary mx-auto mt-2">
      <div className="w-full flex justify-between items-center mx-4">
        <Link href="/">
          <Image src="/polish-flag.svg" width={50} height={50} alt="logo" />
        </Link>
        <Link
          href="/signup"
          className="text-sm md:text-base bg-orange-clr text-white border-2 border-orange-clr font-bold uppercase px-4 py-2 rounded-lg hover:bg-primary-clr hover:text-text-clr tracking-wider hoverIconAnimaition"
        >
          Zapisz się
        </Link>
      </div>
    </nav>
  );
}
