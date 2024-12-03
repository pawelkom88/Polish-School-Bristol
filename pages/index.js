import Hero from '@components/hero/Hero';
import History from '@components/history/History';
import SchoolUnit from '@components/units/SchoolUnit';
import Section from '@components/section/Section';
import WhyUs from '@components/why-us/WhyUs';
import Layout from '@components/layout/Layout';
import Seo from '@components/seo/Seo';
import Image from 'next/image';
import projekt from '../public/projekt.jpg';

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <SchoolUnit />
        <Section title="Historia SZKOŁY">
          <History />
        </Section>
      </Layout>
      <div className="max-w-7xl md:mt-18 mt-24 mx-auto px-4 text-lg text-justify md:text-left text-pretty">
        <h2 className="xl:text-5xl text-4xl text-center font-bold mb-7">
          Dofinansowania
        </h2>
        <p>
          Informujemy, że nasza organizacja otrzymała za pośrednictwem
          Stowarzyszenia „Wspólnota Polska” dofinansowanie od Instytutu Rozwoju
          Języka Polskiego im. Św. Maksymiliana Marii Kolbego ze środków
          Ministra Edukacji Narodowej w ramach konkursu „Wsparcie działań
          promujących język i kulturę polską na świecie”.
        </p>
        <ul className="my-6 text-left text-pretty">
          <li>
            Nazwa zadania publicznego:{' '}
            <strong className="block md:inline">
              Polskie Święta w Brytyjskim krajobrazie
            </strong>
          </li>
          <hr className="my-1" />
          <li>
            Kwota dotacji w 2024 r. :{' '}
            <strong className="block md:inline">19 115,15 PLN</strong>
          </li>
          <hr className="my-1" />
          <li>
            Całkowita wartość zadania publicznego:{' '}
            <strong className="block md:inline">134 823,50 PLN</strong>
          </li>
          <hr className="my-1" />
          <li>
            Data podpisania umowy:{' '}
            <strong className="block md:inline">12.11.2024 r.</strong>
          </li>
          <hr className="my-1" />
        </ul>
        <p>
          Zadanie publiczne ”Polskie Święta w Brytyjskim krajobrazie” dotyczy
          dofinansowania kosztów niezbędnych do realizacji planowanego
          wydarzenia, m. in. zakup materiałów biurowych, dekoracyjnych i
          edukacyjnych, przygotowanie i druk materiałów promocyjnych, koszty
          transportu, zakup nagród, zakwaterowanie i wyżywienie, wynagrodzenia
          ekspertów, wynajem sprzętu i sal itp.{' '}
        </p>
        <Image
          className="m-auto"
          width={800}
          height={800}
          src={projekt}
          alt="flaga oraz godlo Polski wraz z tytulem projektu"
        />
      </div>
      <WhyUs />
    </>
  );
}
