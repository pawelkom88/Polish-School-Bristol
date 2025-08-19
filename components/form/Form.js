import Image from 'next/image';

export default function Form({}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center item-start gap-4 xl:gap-8">
      <div className="lg:mt-24">
        <a
          className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
          href="https://ps-bristol.netlify.app/files/formularzzgłoszeniowyPSJiK.pdf"
        >
          <Image
            className="mx-auto"
            width={70}
            height={150}
            src="/icons/form.svg"
            alt="form icon"
          />
        </a>
        <div>
          <ul className="text-md md:text-lg list-inside leading-10 my-4">
            <li className="list-img">
              <span className="pl-2">
                Pobierz formularz zgłoszeniowy oraz regulamin szkoły klikając w
                powyższą ikonę.
              </span>
            </li>
            <li className="list-img">
              <span className="pl-2">Zapoznaj się z regulaminem szkoły</span>
              <a
                className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
                href="https://ps-bristol.netlify.app/files/RegulaminPSJiK2023-2024.pdf"
              >
                <Image
                  className="mx-auto my-8"
                  width={70}
                  height={150}
                  src="/icons/award-certificate.svg"
                  alt="statute icon"
                />
              </a>
            </li>
            <li className="list-img">
              <span className="pl-2">
                Wypełnij formularz zgłoszeniowy i podpisz.
              </span>
            </li>
            <li className="list-img">
              <span className="pl-2">
                Wyślij na{' '}
                <a
                  style={{
                    color: '#3d992b',
                    fontWeight: 'bold',
                  }}
                  href="mailto:PolishSchoolBristol2@gmail.com"
                >
                  PolishSchoolBristol2@gmail.com (Holy Cross)
                </a>{' '}
                lub{' '}
                <a
                  style={{
                    color: '#5d90ee',
                    fontWeight: 'bold',
                  }}
                  href="mailto:PolishSchoolBristol@gmail.com"
                >
                  PolishSchoolBristol@gmail.com (Oasis)
                </a>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:basis-1/3">
        <Image
          className="w-full rounded-xl"
          src="/polska-szkola-usmiechniete-dziecko.webp"
          width={720}
          height={514}
          alt="School icon"
        />
      </div>
    </section>
  );
}
