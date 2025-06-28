import React from "react";
import type {
  SkillsSectionStoryblok,
  SkillStoryblok,
} from "@/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

const Skills = ({ blok }: { blok: SkillsSectionStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok?.headline}</h2>
      <p>{blok?.subheadline}</p>

      {blok?.skills?.map((item) => {
        if (item.component === "skill") {
          const skill = item as SkillStoryblok;

          return (
            <div key={skill?._uid}>
              <h3>{skill?.headline}</h3>
              <p>{skill?.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Skills;
