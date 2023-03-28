import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="max-w-7xl flex items-center justify-between py-6    xl:px-0 content-center bg-secondary z-10 mx-auto">
      <ul className="flex gap-2 ml-8">
        <li>co tu dac ????</li>
        <li>co tu dac ????</li>
      </ul>

      <Link
        href="/"
        className="bg-orange-clr text-white border-2 border-orange-clr font-bold uppercase px-4 py-2 mr-10 rounded-lg 
      hover:bg-primary-clr hover:text-text-clr tracking-wider"
      >
        Zapisz się
      </Link>
    </nav>
  );
}
