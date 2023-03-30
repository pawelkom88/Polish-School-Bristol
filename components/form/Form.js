
import Image from 'next/image';

export default function Form({}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center item-start gap-4 xl:gap-8">
      <div className="lg:min-h-[30rem] lg:mt-24">
        <a
          className="block hover:-translate-y-2 hover:scale-110 transition-transform duration-500"
          href=""
        >
          <Image
            className="mx-auto"
            width={100}
            height={200}
            src="/icons/form.png"
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
                  href="mailto:PolishSchoolBristol@gmail.com"
                >
                  PolishSchoolBristol@gmail.com
                </a>{' '}
                lub{' '}
                <a
                  style={{
                    color: '#5d90ee',
                    fontWeight: 'bold',
                  }}
                  href="mailto:PolishSchoolBristol2@gmail.com"
                >
                  PolishSchoolBristol2@gmail.com
                </a>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:basis-1/3">
        <Image
          className="w-full"
          src="/Graduation-bro.svg"
          width={720}
          height={514}
          alt="School icon"
        />
        <a className="hidden" href="https://storyset.com/education">
          Education illustrations by Storyset
        </a>
      </div>
    </section>
  );
}
