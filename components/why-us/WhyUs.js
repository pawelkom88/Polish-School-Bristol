import Card from '@components/card/Card';
import { cardData } from '@data/cardData';
import Image from 'next/image';

export default function WhyUs() {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <h2 className="xl:text-5xl text-4xl text-center font-bold mt-16 mb-8 ">
        Dlaczego my ?
      </h2>
      <div className="max-w-7xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4">
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div className="max-w-7xl my-12 px-4">
        <h2 class="xl:text-5xl text-4xl text-center font-bold my-7">
          Wiadomości
        </h2>
        <Image src="/funds.webp" width={1200} height={766} alt="funds" />
        <br />
        <br />
        <p class="text-lg text-justify">
          Informujemy, że nasza szkoła otrzymała dofinansowanie przez Instytut
          Rozwoju Języka Polskiego im. Świętego Maksymiliana Marii Kolbego ze
          środków Ministra Edukacji i Nauki w ramach konkursu &quot;Wspieranie
          Edukacji Polonijnej i Polskiej Poza Granicami Polski 2023&quot;.
        </p>
        <br />
        <p class="text-lg text-justify">
          Nazwa przedsięwzięcia: Szkoła (bardziej) polska. Wsparcie oświaty
          polonijnej w okręgu konsularnym Konsula RP w Manchesterze (I)
        </p>
        <br />
        <ul class="text-lg">
          Kwota dotacji:
          <li className="list-disc">
            w 2023 r.: <strong>29 483,00 PLN</strong>
          </li>
          <li className="list-disc">
            w 2024 r.: <strong>35 468,00 PLN</strong>
          </li>
        </ul>
        <br />
        <p class="text-lg">
          Całkowita wartość przedsięwzięcia: <strong>811 400,00 PL</strong>N
        </p>
        <br />
        <p class="text-lg text-justify">
          Przedsięwzięcie{' '}
          <strong>
            „Szkoła (bardziej) polska. Wsparcie oświaty polonijnej w okręgu
            konsularnym Konsula RP w Manchesterze (I)”
          </strong>{' '}
          polega na wsparciu szkół polonijnych poprzez dofinansowanie kosztów
          wynajmu pomieszczeń, wynagrodzeń nauczycieli, ubezpieczenia i innych
          kosztów funkcjonowania.
        </p>
      </div>
      <div className="w-full min-h-[0rem] lg:min-h-[40rem] md:bg-auto  bg-white md:bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('/why-usoverlay.webp')] bg-cover"></div>
    </div>
  );
}
