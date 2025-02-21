import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 mt-auto">
      <div className="bg-[#755C49] text-white lg:col-span-1 p-12 lg:p-16">
        <div className="max-w-xs">
          <Image
            src="/logo-white.svg"
            alt="HE Architecture"
            width={100}
            height={100}
            className="w-[80px] mb-8"
          />
          <div className="space-y-6">
            <h3 className="font-bold text-2xl">HE Architecture</h3>
            <div className="space-y-1">
              <p>+33 (0) 6 32 15 10 89</p>
              <p>elsa@hearchitecture.fr</p>
              <p>@he__architecture</p>
            </div>
            <div>
              <p>25, avenue de la Croix</p>
              <p>du Capitaine</p>
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
