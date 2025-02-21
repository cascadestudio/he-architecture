import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  featuredProject: { slug, mainImage, title, projectType },
}: {
  featuredProject: Project;
}) {
  return (
    <section className="lg:pt-7 mb-24 min-h-screen">
      <Link href={`/project/${slug.current}`}>
        <div className="relative aspect-[350/660] lg:aspect-[1040/740] w-full">
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
