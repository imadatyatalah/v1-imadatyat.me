import { Metadata } from "next";
import Projects from "./projects";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <main className="main-container">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>

        <Projects />
      </section>
    </main>
  );
};

export default ProjectsPage;
