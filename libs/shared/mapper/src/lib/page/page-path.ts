import { PathInterface } from '@deardigital/shared/interfaces';
import { PageStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';

export function PagePathMapper(pages: StoryblokStory<PageStoryblok>[], locale: string): PathInterface[] {
  return pages.map((page: StoryblokStory<PageStoryblok>) => ({
    params: {
      slug: page.slug,
    },
    locale,
  }));
}
