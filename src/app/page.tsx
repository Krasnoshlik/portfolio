import Header from "./components/ui/header";
import MainSection from "./components/layout/main-section";
import ProjectsSection from "./components/layout/projects-section";
import SkillsSection from "./components/layout/skills-section";

export default function Home() {
  return (
    <main className=" max-w-6xl m-auto">
      
      <div className=" mx-4 py-24">
        <Header/>
        <MainSection/>
        <ProjectsSection/>
        <SkillsSection/>
      </div>
      
    </main>
  );
}
