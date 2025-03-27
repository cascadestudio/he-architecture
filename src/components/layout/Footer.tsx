import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#755C49] h-screen z-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:px-[200px] relative"
    >
      <div className="text-[var(--background)] lg:col-span-1 flex items-center relative w-full">
        <div className="pt-[50px] pb-[15px] px-5 lg:px-0 lg:py-0 w-full">
          <Image
            src="/logo-white.svg"
            alt="HE Architecture"
            width={150}
            height={150}
            className="w-[100px] lg:w-[150px] mb-8"
          />
          <div className="space-y-6 lg:max-w-[160px] max-w-none">
            <h3 className="font-bold">HE Architecture</h3>
            <Link href="tel:+33632151089">+33 (0) 6 32 15 10 89</Link>
            <br />
            <Link href="mailto:elsa@hearchitecture.fr">
              elsa@hearchitecture.fr
            </Link>
            <br />
            <Link
              href="https://www.instagram.com/he__architecture"
              target="_blank"
              rel="noopener noreferrer"
            >
              @he__architecture
            </Link>
            <br />
            <div>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=25+avenue+de+la+Croix+du+Capitaine+34070+Montpellier+France"
                target="_blank"
                rel="noopener noreferrer"
              >
                25, avenue de la Croix du Capitaine
                <br />
                34070 Montpellier
              </Link>
            </div>
          </div>

          <div className="block lg:hidden text-[var(--background)] text-xs mt-16 w-full">
            <Link href="/mentions-legales" className="block mb-2">
              Mentions légales
            </Link>
            <div className="flex justify-between">
              <p>HE Architecture © {new Date().getFullYear()}</p>
              <p>
                Site réalisé par{" "}
                <Link
                  href="https://www.cascadestudio.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  le studio Cascade
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop-only footer text */}
        <div className="hidden lg:block absolute bottom-8 left-0 text-[var(--background)] text-xs w-full">
          <Link href="/mentions-legales" className="block mb-2">
            Mentions légales
          </Link>
          <div className="w-full flex justify-between">
            <p>HE Architecture © {new Date().getFullYear()}</p>
            <p>
              Site réalisé par{" "}
              <Link
                href="https://www.cascadestudio.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                le studio Cascade
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative aspect-square lg:aspect-auto lg:col-span-2 self-end lg:self-auto lg:mr-[-200px]">
        <Image
          src="/agence.jpg"
          alt="Notre agence"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
    </footer>
  );
}
