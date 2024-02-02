import { Metadata } from "next";
import { Suspense } from "react";

import Projects from "./projects";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <main className="main-container">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>

        <Suspense>
          <Projects />
        </Suspense>
      </section>
    </main>
  );
};

export default ProjectsPage;
