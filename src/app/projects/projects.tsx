"use client";

import { projects, tags } from "../../../data/projects";
import ProjectCard from "@/components/ProjectCard";
import useTags from "@/hooks/useTags";

const Projects = () => {
  const [data, setCurrentTag] = useTags(projects);

  return (
    <>
      <div className="flex flex-wrap my-4">
        {tags.map((tag) => (
          <button
            className="px-2 py-1 mb-3 mr-3 font-semibold text-white rounded-md lg:transition-all lg:transform bg-blue-700 hover:bg-blue-600 lg:hover:scale-105"
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
