export default function FeesInfo({}) {
  return (
    <ul className="text-left list-inside leading-10 mt-8">
      <li className="list-img">
        W przypadku nieobecności ucznia na zajęciach opłata{' '}
        <span className="underline font-bold">nie ulega zwrotowi</span>.
      </li>
      <li className="list-img">
        W przypadku zalegania z płatnościami naliczana będzie opłata
        manipulacyjna w wysokości <span className="font-bold">£10</span>{' '}
        niezależnie od wysokości należnej kwoty.{' '}
      </li>
      <li className="list-img">
        W sytuacji rezygnacji z usług Szkoły rodzic/ opiekun prawny zobowiązany
        jest opłacić czesne za każdą sobotę jednomiesięcznego okresu
        wypowiedzenia.
      </li>
      <li className="list-img">
        Nieuiszczenie opłaty czesnego w terminie skutkuje odmową świadczenia
        usługi edukacyjnej przez Szkołę.
      </li>
    </ul>
  );
}
