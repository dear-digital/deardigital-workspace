"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/* eslint-disable-next-line */
export interface StoryblokProviderProps {
  children: JSX.Element;
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

export function StoryblokProvider({ children }: StoryblokProviderProps) {
  return children;
}

export default StoryblokProvider;
