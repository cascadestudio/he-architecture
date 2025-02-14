import { client } from '../../../../sanity/lib/client'
import { notFound } from 'next/navigation'

async function getProject(slug) {
  const project = await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, {
    slug: slug
  })
  return project
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}
