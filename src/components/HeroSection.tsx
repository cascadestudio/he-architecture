import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  featuredProject: { slug, mainImage, title, projectType },
}: {
  featuredProject: Project;
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] h-[calc(100vh-120px)] mb-24 lg:pt-7">
      <Link
        href={`/project/${slug.current}`}
        className="h-full block lg:col-span-3 group z-10"
      >
        <div className="relative h-[calc(100%-70px)] overflow-hidden">
          {mainImage && (
            <Image
              src={mainImage.asset.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              priority
            />
          )}
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-end">{title}</h2>
          {projectType && <p className="mt-1 text-end">{projectType}</p>}
        </div>
      </Link>
    </section>
  );
}
