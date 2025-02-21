import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, FEATURED_PROJECT_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const [featuredProject, projects] = await Promise.all([
    client.fetch(FEATURED_PROJECT_QUERY),
    client.fetch(PROJECTS_QUERY),
  ]);

  return (
    <>
      {featuredProject && (
        <div className="mb-16">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={featuredProject.mainImage.asset.url}
              alt={featuredProject.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4">
            <Link href={`/project/${featuredProject.slug.current}`}>
              <h2 className="text-3xl font-bold">{featuredProject.title}</h2>
              <p className="text-xl mt-2">{featuredProject.projectType}</p>
            </Link>
          </div>
        </div>
      )}

      <ul className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <li key={project.slug.current}>
            <Link href={`/project/${project.slug.current}`}>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
