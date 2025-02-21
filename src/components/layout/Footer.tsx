import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#755C49] h-screen z-50 grid grid-cols-1 lg:grid-cols-3 lg:pl-[200px]">
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
              <p>+33 (0) 6 32 15 10 89</p>
              <br />
              <p>elsa@hearchitecture.fr</p>
              <br />
              <p>@he__architecture</p>
            </div>
            <div>
              <p>25, avenue de la Croix du Capitaine</p>
              <p>34070 Montpellier</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square lg:aspect-auto lg:col-span-2">
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
