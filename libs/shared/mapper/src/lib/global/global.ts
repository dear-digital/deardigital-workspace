import { GlobalInterface, LinkInterface } from '@deardigital/shared/interfaces';
import { GlobalStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { linkMapper } from '../link/link';
import { Link } from 'd3';

export function globalsMapper(globals?: StoryblokStory<GlobalStoryblok>): GlobalInterface | null {
  if (!globals) return null;

  return {
    // @ts-ignore
    _editable: globals.content._editable ?? null,
    _uid: globals.content._uid,
    component: globals.content.component,
    header: {
      navigation: globals?.content?.header?.[0].navigation?.reduce(
        (acc, nav) => {
          const item = linkMapper(nav.link, nav?.label);
          if (item) {
            acc.push(item)
          }
          return acc
        }, [] as LinkInterface[]) ?? [],
      cta: globals?.content?.header?.[0].cta?.[0] ? linkMapper(globals?.content?.header?.[0].cta[0].link, globals?.content?.header?.[0].cta[0].label) : null,
    },
  };
}
