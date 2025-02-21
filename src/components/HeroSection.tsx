import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  featuredProject: { slug, mainImage, title, projectType },
}: {
  featuredProject: Project;
}) {
  return (
    <section className="h-[calc(100vh-120px)] mb-24 lg:h-screen lg:pt-7">
      <Link href={`/project/${slug.current}`} className="h-full block">
        <div className="relative h-[calc(100%-70px)] lg:h-[calc(100%-85px)]">
          {mainImage && (
            <Image
              src={mainImage.asset.url}
              alt={title}
              fill
              className="object-cover"
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
