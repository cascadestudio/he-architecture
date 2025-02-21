import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] mb-[190px] lg:gap-y-[80px]">
      {projects.map(({ slug, mainImage, title, projectType }) => (
        <Link
          href={`/project/${slug.current}`}
          key={slug.current}
          className="block group mb-[80px] lg:mb-0"
        >
          {mainImage && (
            <div className="relative aspect-[350/350] lg:aspect-[330/200] mb-[15px] overflow-hidden">
              <Image
                src={mainImage.asset.url}
                alt={title}
                sizes="(max-width: 1024px) 100vw, 33vw"
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          )}
          <h2 className="font-bold text-end">{title}</h2>
          <p className="mt-1 text-end">{projectType}</p>
        </Link>
      ))}
    </section>
  );
}
