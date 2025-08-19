import React from 'react';
import Image from 'next/image';

function ContactBlock({ title, content }) {
  return (
    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
      <dt className="text-lg font-medium">{title}:</dt>
      <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">{content}</dd>
    </div>
  );
}

export default function Details({ data }) {
  const { name, mail, tel, location, socialMedia, topBarClass } = data;

  return (
    <div className={`${topBarClass} overflow-hidden border-2 border-b-0`}>
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl md:text-5xl my-2 font-medium leading-10 text-white">
          {name}
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-white">{location.address}</p>
      </div>
      <div className="bg-white border-t border-gray-200">
        <dl>
          <ContactBlock
            title="Telefon"
            content={<a href={`tel:${tel}`}>{tel}</a>}
          />
          <ContactBlock
            title="Adres e-mail"
            content={<a href={`mailto:${mail}`}>{mail}</a>}
          />
          <ContactBlock
            title="Social media"
            content={
              <a href={socialMedia} target="_blank" rel="noopener noreferrer">
                <Image src="/fb.svg" width={30} height={30} alt="fb icon" />
              </a>
            }
          />
          <ContactBlock
            title="Ważne informacje"
            content={
           <ul>
             <li>Telefon szkoły jest aktywny jedynie w dniu i godzinach zajęć.</li>
             <li>Jeśli chcą Państwo się skontaktować z Dyrekcją, Managerem lub Wychowawcą w ciągu tygodnia, prosimy o kontakt drogą mailową.</li>
             <li>W sobotę Dyrekcja oraz Manager Szkoły są do Państwa dyspozycji w budynku szkoły.</li>
           </ul>
            }
          />
        </dl>
      </div>
    </div>
  );
}
