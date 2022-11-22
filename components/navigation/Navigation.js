import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="max-w-7xl flex items-center justify-between py-6    xl:px-0 px-8 content-center bg-secondary z-10 mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={55}
            height={30}
            src="/polish-flag.svg"
            alt="Logo Polskiej Szkoly w Bristolu"
          />
        </Link>
      </div>
      <h3 className="antialiased font-bold tracking-wide dark:text-gray-900 uppercase text-3xl items-center md:flex mt-2 mx-3">
        Polska to My !
      </h3>
    </nav>
  );
}
