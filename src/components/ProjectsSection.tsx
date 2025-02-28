"use client";
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [isShowAll, setIsShowAll] = useState(false);
  const displayedProjects = isShowAll ? projects : projects.slice(0, 6);
  const hasMoreProjects = projects.length > 6;

  return (
    <section className="mb-[190px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] lg:gap-y-[80px]">
        {displayedProjects.map(({ slug, mainImage, title, projectType }) => (
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
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center lg:mt-[80px]">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="font-bold px-4 py-2 rounded-full border-2 border-current flex justify-center"
          >
            {isShowAll ? "Voir moins" : "Voir plus de projets"}
          </button>
        </div>
      )}
    </section>
  );
}
