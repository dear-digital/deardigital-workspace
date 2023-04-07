import { GlobalInterface } from '@deardigital/shared/interfaces';
import { GlobalStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { linkMapper } from '../link/link';

export function globalsMapper(globals: StoryblokStory<GlobalStoryblok>): GlobalInterface {
  return {
    // @ts-ignore
    _editable: globals.content._editable ?? null,
    _uid: globals.content._uid,
    component: globals.content.component,
    header: {
      navigation: globals?.content?.header?.[0].navigation?.map((nav) => linkMapper(nav.link, nav?.label)) ?? [],
      cta: globals?.content?.header?.[0].cta?.[0] ? linkMapper(globals?.content?.header?.[0].cta[0].link, globals?.content?.header?.[0].cta[0].label) : null,
    },
  };
}