import React from "react";
import {
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "@/types/component-types-sb";

const Page = ({ blok }: { blok: PageStoryblok }) => {
  return (
    <main>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok?._uid} />
      ))}
    </main>
  );
};

export default Page;
