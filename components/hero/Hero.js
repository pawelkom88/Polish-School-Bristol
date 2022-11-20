import Image from 'next/image'

export default function Hero() {
  return (
    <section className="h-full pt-12 md:pt-48 md:mt-0 md:h-screen flex flex-col justify-center text-center  lg:flex-row md:justify-center md:items-center 2xl:px-96 xl:px-72 lg:px-24 md:px-24 px-8 ">
      <div>
        <h1 className="xl:text-6xl text-4xl font-bold mb-7">
          Polska Szkoła Języka i Kultury w{' '}
          <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
            Bristolu
          </span>
        </h1>
        <p className="text-lg xl:text-2xl mb-7 py-4">
          Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie
          tradycje i obyczaje, stając się ambasadorami kultury polskiej na
          świecie.
        </p>
        <button className="dark:bg-gray-900 hover:bg-gray-700 px-6 py-4 rounded-lg text-white mr-2 mb-2">
          Wyślij wiadomość
        </button>
      </div>
    </section>
  )
}
