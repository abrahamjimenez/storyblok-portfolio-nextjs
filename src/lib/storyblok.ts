import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_NODE_ENV === "development" ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_STORYBLOK_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: Page,
    hero_section: Hero,
    about_me_section: About,
    work_experience_section: Work,
    education_section: Education,
    skills_section: Skills,
    projects_section: Projects,
  },
});
