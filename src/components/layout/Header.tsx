import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-5 bg-[var(--background)] lg:bg-transparent lg:px-0 lg:py-7 z-50">
      <nav>
        <div className="flex justify-between items-center lg:items-start">
          <Link
            href="/"
            className="w-full flex justify-between items-center lg:w-auto lg:flex-col lg:mx-[15px]"
          >
            <Image
              src="/logo.svg"
              alt="HE Architecture"
              width={100}
              height={100}
              className="w-[80px] lg:w-[100px] h-auto lg:mb-11"
            />
            <div className="text-end lg:text-center lg:max-w-[170px] flex-shrink-0">
              <h1 className="text-2xl font-bold mb-1.5 lg:mb-3">
                HE Architecture
              </h1>
              <p className="text-lg font-medium">
                Rénovation <span className="lg:hidden">/</span> Contemporain
              </p>
            </div>
          </Link>
          <div className="hidden lg:block lg:mr-[60px]">
            <Link href="/contact" className="text-2xl font-bold">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
