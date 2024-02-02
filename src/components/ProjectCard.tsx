import Image from "next/image";
import React from "react";

import type { Project } from "../../data/projects";

const ProjectCard = ({ title, live, image }: Project) => {
  return (
    <a href={live} target="_blank" rel="noopener noreferrer">
      <div className="group my-8 max-w-sm sm:my-0 sm:max-w-none">
        <div className="flex lg:transform lg:transition-all lg:hover:scale-105">
          <Image
            src={image}
            alt={title}
            title={title}
            quality={50}
            className="rounded-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
