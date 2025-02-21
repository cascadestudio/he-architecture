import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            href={`/project/${project.slug.current}`}
            key={project.slug.current}
            className="block"
          >
            {project.mainImage && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.mainImage.asset.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h2 className="mt-4 text-xl font-medium">{project.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
