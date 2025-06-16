import React from "react";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function fetchData() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/home`, {
    version: process.env.NEXT_PUBLIC_NODE_ENV === "development" ? "draft" : "published",
  });
}


const Page = async () => {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Page;
