import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sm:max-w-7xl flex items-center justify-between py-6    xl:px-4 bg-secondary mx-auto mt-2">
      <div className="w-full flex justify-between items-center mx-4">
        <Link href="/">
          <Image src="/polish-flag.svg" width={50} height={50} alt="logo" />
        </Link>
        <div>

        <Link
          href="/documents"
          className="text-sm md:text-base bg-white text-primary border-2 border-orange-clr font-bold uppercase px-4 py-2 rounded-lg hover:text-white hover:bg-orange-clr hover:text-text-clr tracking-wider mr-2"
        >
          Dokumenty dla rodziców
        </Link>
        <Link
          href="/signup"
          className="text-sm md:text-base bg-orange-clr text-white border-2 border-orange-clr font-bold uppercase px-4 py-2 rounded-lg hover:bg-primary-clr hover:text-text-clr tracking-wider hoverIconAnimaition"
        >
          Zapisz się
        </Link>
        </div>
      </div>
    </nav>
  );
}
