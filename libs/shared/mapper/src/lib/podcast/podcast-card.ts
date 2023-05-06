import { PodcastCardInterface } from '@deardigital/shared/interfaces';
import { PodcastStoryblok, TeamStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageStoryblokMapper } from '../image/image';
import { personMapper } from '../person/person';
import { teamMapper } from '../team/team';
import { mapPodcastAudio } from './podcast';


export function podcastCardsMapper(podcasts: StoryblokStory<PodcastStoryblok>[]): PodcastCardInterface[] {
  return podcasts?.map(item => podcastCardMapper(item)) ?? [];
}

export function podcastCardMapper(page: StoryblokStory<PodcastStoryblok>): PodcastCardInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    thumbnail: imageStoryblokMapper(page.content.thumbnail),
    audio: mapPodcastAudio(page?.content?.audio?.url),
    description: page?.content?.description ?? null,
    guest: personMapper(page.content.guest[0]),
    host: teamMapper(page.content.host as StoryblokStory<TeamStoryblok>),
  }
}
