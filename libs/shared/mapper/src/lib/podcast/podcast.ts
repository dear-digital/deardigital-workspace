import { MetaType, PodcastInterface } from '@deardigital/shared/interfaces';
import { PodcastStoryblok, TeamStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks/content-blocks';
import { mapPodcastHero } from '../hero-blocks/podcast';
import { imageStoryblokMapper } from '../image/image';
import { personMapper } from '../person/person';
import { teamMapper } from '../team/team';


export function podcastsMapper(podcasts: StoryblokStory<PodcastStoryblok>[], meta: MetaType): PodcastInterface[] {
  return podcasts?.map(item => podcastMapper(item, meta)) ?? [];
}

export function podcastMapper(page: StoryblokStory<PodcastStoryblok>, meta: MetaType): PodcastInterface {
  return {
    globals: meta.globals,
    title: page?.name ?? '',
    slug: page?.full_slug,
    audio: mapPodcastAudio(page?.content?.audio?.url),
    description: page?.content?.description ?? null,
    guest: personMapper(page.content.guest[0]),
    host: teamMapper(page.content.host as StoryblokStory<TeamStoryblok>),
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    hero: mapPodcastHero(page),
    thumbnail: imageStoryblokMapper(page.content.thumbnail)
  }
}

export function mapPodcastAudio(audio: PodcastStoryblok): string | null {
  if(!audio) {
    return null
  }

  return `${audio}?container_id=podcast-player&player=small`
}
