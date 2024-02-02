"use client";

import ProjectCard from "@/components/ProjectCard";
import useTags from "@/hooks/useTags";

import { projects, tags } from "../../../data/projects";

const Projects = () => {
  const [data, setCurrentTag] = useTags(projects);

  return (
    <>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <button
            className="mb-3 mr-3 rounded-md bg-blue-700 px-2 py-1 font-semibold text-white hover:bg-blue-600 lg:transform lg:transition-all lg:hover:scale-105"
            onClick={() => setCurrentTag(tag)}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {data.length ? (
          data.map((project: any, index: number) => (
            <ProjectCard {...project} key={index} />
          ))
        ) : (
          <p className="font-semibold">No projects has been found!</p>
        )}
      </div>
    </>
  );
};

export default Projects;
