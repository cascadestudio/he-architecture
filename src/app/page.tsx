import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, FEATURED_PROJECT_QUERY } from "@/sanity/lib/queries";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default async function Home() {
  const [featuredProject, projects] = await Promise.all([
    client.fetch(FEATURED_PROJECT_QUERY),
    client.fetch(PROJECTS_QUERY),
  ]);

  return (
    <>
      <HeroSection featuredProject={featuredProject} />
      <ProjectsSection projects={projects} />
    </>
  );
}
