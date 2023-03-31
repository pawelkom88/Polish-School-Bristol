import Image from 'next/image';

export default function Details({ data }) {
  const { name, mail, tel, location, socialMedia, topBarClass } = data;

  const bgClr = name !== 'Oasis' ? 'bg-bg2-clr' : 'bg-bg1-clr';

  return (
    <div className={`${topBarClass} overflow-hidden border-2`}>
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl md:text-5xl my-2 font-medium leading-10 text-white">
          {name}
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-white">{location.address}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div
            className={`${bgClr} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
          >
            <dt className="text-lg font-medium text-gray-900">Telefon:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a className="hover:text-indigo-500" href={`mailTo:${tel}`}>
                {tel}
              </a>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Adres e-mail:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a className="hover:text-indigo-500" href={`mailTo:${mail}`}>
                {mail}
              </a>
            </dd>
          </div>
          <div
            className={`${bgClr} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
          >
            <dt className="text-lg font-medium text-gray-900">Social media:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a
                className="hover:text-indigo-500"
                href={socialMedia}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/fb.svg" width={30} height={30} alt="fb icon" />
              </a>
            </dd>
          </div>
          {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Info:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              {content}
            </dd>
          </div> */}
        </dl>
      </div>
    </div>
  );
}
