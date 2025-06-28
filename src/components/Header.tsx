
import React from "react";
import type { HeaderStoryblok } from "@/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }: { blok: HeaderStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok?.title}</h1>
      <div>{blok.links?.map((link) => (
        <div key={link._uid}>
          <a href={`#${(link?.label).toString().toLowerCase()}`}>{link?.label}</a>
        </div>
      ))}</div>
    </div>
  );
};

export default Hero;
