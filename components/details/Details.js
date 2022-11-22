import Image from 'next/image';

export default function Details({
  name,
  content,
  contact,
  location,
  socialMedia,
}) {
  return (
    <div className="overflow-hidden bg-gray-900">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-4xl md:text-6xl my-2 font-medium leading-6 text-white">
          {name}
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-200">
          {location.address}
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Telefon:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a
                className="hover:text-indigo-500"
                href={`mailTo:${contact.tel}`}
              >
                {contact.tel}
              </a>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Adres e-mail:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a
                className="hover:text-indigo-500"
                href={`mailTo:${contact.eMail}`}
              >
                {contact.eMail}
              </a>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Social media:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              <a
                className="hover:text-indigo-500"
                href={`mailTo:${socialMedia}`}
              >
                <a href={socialMedia} target="_blank" rel="noopener noreferrer">
                  <Image src="/fb.svg" width={30} height={30} alt="fb icon" />
                </a>
              </a>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-900">Info:</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
              {content}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
