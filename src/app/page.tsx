import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
export default async function Home() {
  const [projects] = await Promise.all([client.fetch(PROJECTS_QUERY)]);

  return (
    <>
      <HeroSection featuredProject={projects?.[0]} />
      <ProjectsSection projects={projects?.slice(1) || []} />
      <AboutSection />
    </>
  );
}
