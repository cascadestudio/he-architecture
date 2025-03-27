import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="container pb-64">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="relative aspect-[350/460] lg:aspect-[325/490] w-full">
          <Image
            src="/portrait.jpg"
            alt="Portrait d'Elsa Hambert"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-[36px] font-bold leading-tight">
            Elsa Hambert,
            <br />
            Directrice d'agence
            <br />
            et Architecte HMONP
          </h2>

          <div className="space-y-6">
            <p>
              L’agence HE Architecture développe une approche transversale
              faisant dialoguer l’architecture, l’architecture d’intérieur, le
              design et l’art contemporain. Depuis 2018, elle conçoit des
              projets à grande et plus petite échelle, de l’habitation privée au
              tertiaire, l’immeuble collectif et de grand établissement
              d’enseignement. Elle accompagne chaque étape du processus, de la
              conception initiale à la réalisation finale. L’approche est
              globale et précise : règlementation urbaine, incendie, ERP,
              acoustique, thermique, accessibilité…Son engagement à tous les
              niveaux de création est de redonner du souffle au patrimoine bâti
              dans le respect de l’existant. L’objectif étant de penser des
              espaces de vie et de travail pour aujourd’hui et demain.
            </p>

            <p>
              Après quelques jeunes expériences au sein d’agences comme
              architecte sur des typologies de projets variées et complexes,
              Elsa développe sa propre entreprise. Cheffe d’entreprise, son
              approche repose sur la qualité de la relation avec les
              interlocuteurs pour mener à bien des projets exigeants avec
              sensibilité, engagement et rigueur. Tout est conçu avec et pour
              l’utilisateur final, afin de lui permettre d’évoluer dans un cadre
              de vie et de travail de qualité, confortable et harmonieux. Elsa
              associe sa créativité à son savoir-faire et s’appuie sur les
              compétences techniques d’un réseau solide d’artisans. Pour
              réaliser des projets pertinents et maîtrisés, elle collabore
              étroitement avec un bureau d’étude structure dédié et intégré à
              l’agence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
