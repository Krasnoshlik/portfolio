import MainSection from "./components/layout/main-section";
import ProjectsSection from "./components/layout/projects-section";
import SkillsSection from "./components/layout/skills-section";
import AboutMeSection from "./components/layout/about-me-section";

export default function Home() {
  return (
    <main className=" max-w-6xl m-auto">
      <div className=" mx-4 py-24">
        <MainSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <AboutMeSection/>
      </div>
    </main>
  );
}
