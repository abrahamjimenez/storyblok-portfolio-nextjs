import React from "react";
import type {
  ProjectsSectionStoryblok,
  ProjectStoryblok,
} from "@/types/component-types-sb";
import {storyblokEditable} from "@storyblok/react/rsc";

const Projects = ({ blok }: { blok: ProjectsSectionStoryblok }) => {
  return (
  <div {...storyblokEditable(blok)}>
      <h2>{blok?.headline}</h2>
      <p>{blok?.subheadline}</p>

      {blok?.projects?.map((item) => {
        if (item.component === "project") {
          const project = item as ProjectStoryblok;

          return (
            <div key={project?._uid}>
              <h3>{project?.headline}</h3>
              <p>{project?.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
