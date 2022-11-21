import React from 'react'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between py-6 w-full 2xl:px-72 xl:px-40 lg:px-24 md:px-24 px-8  content-center bg-secondary z-10">
      <div className="flex items-center">
        <Image
          width={55}
          height={30}
          src="/polish-flag.svg"
          alt="Logo Polskiej Szkoly w Bristolu"
        />
      </div>
      <h3 className="antialiased font-bold tracking-wide dark:text-gray-900 uppercase text-3xl items-center md:flex mt-2 mx-3">
        Polska to My !
      </h3>
    </nav>
  )
}
