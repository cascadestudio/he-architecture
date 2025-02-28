import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#755C49] h-screen z-20 grid grid-cols-1 lg:grid-cols-3 lg:pl-[200px]"
    >
      <div className="text-[var(--background)] lg:col-span-1 flex items-center">
        <div className="py-[50px] px-5 lg:px-0 lg:py-0">
          <Image
            src="/logo-white.svg"
            alt="HE Architecture"
            width={150}
            height={150}
            className="w-[100px] lg:w-[150px] mb-8"
          />
          <div className="space-y-6 lg:max-w-[160px] max-w-none">
            <h3 className="font-bold">HE Architecture</h3>
            <div>
              <p>
                <Link href="tel:+33632151089">+33 (0) 6 32 15 10 89</Link>
              </p>
              <br />
              <p>
                <Link href="mailto:elsa@hearchitecture.fr">
                  elsa@hearchitecture.fr
                </Link>
              </p>
              <br />
              <p>
                <Link
                  href="https://www.instagram.com/he__architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @he__architecture
                </Link>
              </p>
            </div>
            <div>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=25+avenue+de+la+Croix+du+Capitaine+34070+Montpellier+France"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>25, avenue de la Croix du Capitaine</p>
                <p>34070 Montpellier</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square lg:aspect-auto lg:col-span-2 self-end lg:self-auto">
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
