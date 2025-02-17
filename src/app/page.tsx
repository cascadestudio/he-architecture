import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types/project";
import Link from "next/link";

export default async function Home() {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);
  return (
    <>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
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
