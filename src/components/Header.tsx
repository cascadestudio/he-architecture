import Link from "next/link";
import Logo from "./logo/logo.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="p-5">
      <nav>
        <div className="">
          <Link
            href="/"
            className="flex justify-between items-center lg:flex-col"
          >
            <Image
              src={Logo}
              alt="HE Architecture"
              height={100}
              width={100}
              className="w-[80px] lg:w-[100px] h-auto lg:mb-11"
            />
            <div className="text-end lg:text-center">
              <h1 className="text-2xl font-bold">HE Architecture</h1>
              <p className="text-lg font-medium">Rénovation / Contemporain</p>
            </div>
          </Link>
          <div className="space-x-6 hidden md:block">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
