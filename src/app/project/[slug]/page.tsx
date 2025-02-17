// app/project/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

interface ProjectProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params;

  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    title,
    // Include other fields you need
  }`;

  const project = await client.fetch(query, { slug });

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Render other project details */}
    </div>
  );
}
