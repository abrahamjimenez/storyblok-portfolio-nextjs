"use client";

import { getStoryblokApi } from "@/lib/storyblok";

export default function StoryblokProvider({
  children,
    isEnabled
}: {
  children: React.ReactNode,
  isEnabled: boolean
}) {
  getStoryblokApi(isEnabled);
  return children;
}
