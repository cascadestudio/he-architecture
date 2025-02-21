import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="container py-16 md:py-24">
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
              L'agence développe une approche transversale nourrie de
              l'entrecroisement des regards et des disciplines, en faisant
              dialoguer l'architecture, l'architecture d'intérieur, le design et
              l'art contemporain tout en élaborant un art de concevoir et de
              construire ouvert à toutes les échelles et les typologies
              d'espaces.
            </p>

            <p>
              Dès sa première réalisation d'une rénovation imposante, le Lycée
              Notre Dame de la Merci ( 2019-2023, 7000 m2) dans le centre
              historique de Montpellier, les interventions de l'agence
              s'inscrivent dans une recherche de durabilité en réponse aux
              besoins de tous les usagers. Loin de toute écriture formelle, il
              s'agit d'une architecture minimale dans son esthétique, maximale
              dans son fonctionnalisme décuplé et sa qualité environnementale
              revendiquant un postulat du retour au « bon sens ».
            </p>

            <p>
              En adossant à ses compétences un bureau d'ingénierie dédié, HE
              ARCHITECTURE affirme sa volonté d'emprunter de nouvelles voies.
            </p>

            <p>
              Qu'il s'agisse de commandes publiques ou privées, l'engagement de
              l'agence et celui de concepteur- bâtisseur à tous les niveaux de
              création. Ce faisant il s'agit bien de redonner du souffle au
              patrimoine bâti - dans le respect de l'existant - des espaces de
              vie et de travail pour aujourd'hui et demain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
