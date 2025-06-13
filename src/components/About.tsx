import React from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { AboutMeSectionStoryblok } from "@/types/component-types-sb";

const About = ({ blok }: { blok: AboutMeSectionStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok?.headline}</h2>

      {blok?.description}

      {blok?.social_links?.map((link) => (
        <div key={link._uid}>
          <Image src={link.icon.filename} alt="" width={24} height={24} />
          <p>{link.label}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
