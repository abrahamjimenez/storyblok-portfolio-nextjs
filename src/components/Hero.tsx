import React from "react";
import type { HeroSectionStoryblok } from "@/types/component-types-sb";
import {storyblokEditable} from "@storyblok/react/rsc";

const Hero = ({ blok }: { blok: HeroSectionStoryblok }) => {
  return (
  <div {...storyblokEditable(blok)}>
      <p>{blok?.eyebrow}</p>
      <h1>{blok?.headline}</h1>
      <p>{blok?.description}</p>
    </div>
  );
};

export default Hero;
