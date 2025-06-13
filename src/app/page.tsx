import React from "react";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { StoryblokContentVersionKeys } from "storyblok-js-client";

const Page = async () => {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Page;

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, {
    version: process.env
      .NEXT_PUBLIC_STORYBLOK_VERSION as StoryblokContentVersionKeys,
  });
}
