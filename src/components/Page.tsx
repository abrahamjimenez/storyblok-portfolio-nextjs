import React from "react";
import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";
import type { PageStoryblok } from "@/types/component-types-sb";

const Page = ({ blok }: { blok: PageStoryblok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.header?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok?._uid} />
      ))}

      {blok?.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok?._uid} />
      ))}
    </main>
  );
};

export default Page;
