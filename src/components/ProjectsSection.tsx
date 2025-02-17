import { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <li key={project.slug.current}>
            <Link href={`/projects/${project.slug.current}`}>
              <a>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
