import { client } from '../../sanity/lib/client'
import Link from 'next/link'

async function getProjects() {
  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    "slug": slug.current
  }`) || []
  return projects
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects?.map((project) => (
          <div key={project._id}>
            <Link href={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
            </Link>
          </div>
        ))}
        {projects.length === 0 && (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
