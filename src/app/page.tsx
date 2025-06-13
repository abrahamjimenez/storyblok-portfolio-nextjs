import React from "react";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const Page = async () => {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
        <p>App / page</p>
    </div>
  );
};

export default Page;

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
