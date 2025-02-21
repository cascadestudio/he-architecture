import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  featuredProject,
}: {
  featuredProject: Project;
}) {
  return (
    <section className="mb-16">
      <Link href={`/project/${featuredProject.slug.current}`}>
        <div className="relative aspect-[350/660] lg:aspect-[1040/740] w-full">
          {featuredProject.mainImage && (
            <Image
              src={featuredProject.mainImage.asset.url}
              alt={featuredProject.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-medium">{featuredProject.title}</h2>
          {featuredProject.description && (
            <p className="mt-2">{featuredProject.description}</p>
          )}
        </div>
      </Link>
    </section>
  );
}
