import React from "react";
import {draftMode} from "next/headers";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function fetchData() {
  const {isEnabled} = await draftMode()
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/home`, {
    version: process.env.NEXT_PUBLI_NODE_ENV === "development" || isEnabled ? "draft" : "published",
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
