import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  return (
    <section className="h-full pt-12 md:pt-48 md:mt-0 md:h-screen flex flex-col justify-center text-center lg:text-left lg:flex-row md:justify-between md:items-center 2xl:px-72 xl:px-40 lg:px-24 md:px-24 px-8 bg-secondary">
      <div className="md:flex-1 md:mr-10">
        <h1 className="xl:text-5xl text-4xl font-bold mb-7">
          Polska Szkoła Języka i Kultury w{' '}
          <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
            Bristolu
          </span>
        </h1>
        <p className="text-lg mb-7">
        Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie tradycje i obyczaje, stając się ambasadorami kultury polskiej na świecie. 
        </p>
        <button className="dark:bg-gray-900 hover:bg-gray-700 px-6 py-4 rounded-lg text-white mr-2 mb-2">
          Wyślij wiadomość
        </button>
      </div>
      <div className=" hidden 2xl:flex justify-between md:block mt-8 md:mt-0 md:flex-1">
        <div className="relative">
          <Image
            width={50}
            height={50}
            src="/Highlight1.svg"
            alt="doodle"
            className="hidden 2xl:block absolute top-1 left-5"
          />
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="/moving-bus.json"
          ></lottie-player>
          <Image
            width={50}
            height={50}
            src="/Highlight2.svg"
            alt="doodle"
            className="hidden 2xl:block absolute left-full"
          />
        </div>
      </div>
    </section>
  )
}
