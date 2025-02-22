// app/project/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { GalleryItem } from "@/types/project";

interface ProjectProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params;

  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) {
    notFound();
  }

  const {
    title,
    mainImage,
    projectType,
    description,
    city,
    clientName,
    mission,
    budget,
    gallery,
  } = project;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-24 lg:pt-7">
      <div className="col-span-full mb-8 lg:mb-[80px]">
        {mainImage && (
          <Image
            src={mainImage.asset.url}
            alt={title}
            width={1920}
            height={1080}
            className="w-full aspect-[350/660] lg:aspect-[1040/740] object-cover"
            priority
          />
        )}
      </div>
      <div className="col-span-full lg:col-span-2">
        <h2 className="text-[36px] leading-[46px] lg:text-[64px] lg:leading-[78px] font-bold mb-4 lg:mb-5">
          {title}
        </h2>
        <p className="text-lg lg:text-2xl mb-12 lg:mb-10">{projectType}</p>
      </div>
      <div className="col-span-full lg:col-span-1 grid grid-cols-2 gap-y-5 mb-20 lg:flex lg:flex-col lg:text-end">
        <div>
          <p>Ville</p>
          <p className="font-bold">{city}</p>
        </div>
        <div className="text-end">
          <p>Maître d’ouvrage</p>
          <p className="font-bold">{clientName}</p>
        </div>
        <div>
          <p>Mission</p>
          <p className="font-bold">{mission}</p>
        </div>
        <div className="text-end">
          <p>Montant des travaux</p>
          <p className="font-bold">{budget}</p>
        </div>
      </div>
      <p className="whitespace-pre-wrap col-span-full lg:col-span-2 mb-20 lg:mb-40">
        {description}
      </p>
      {gallery?.map(({ image, caption }: GalleryItem, index: number) => (
        <div
          key={index}
          className="mb-8 col-span-full lg:col-span-1 lg:row-start-4"
        >
          <Image
            src={image.asset.url}
            alt={caption || `Gallery image ${index + 1}`}
            width={1920}
            height={1080}
            className="w-full aspect-[350/350] lg:aspect-[330/240] object-cover mb-2"
          />
          {caption && <p>{caption}</p>}
        </div>
      ))}
    </div>
  );
}
