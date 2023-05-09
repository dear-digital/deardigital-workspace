import { TeamInterface } from '@deardigital/shared/interfaces';
import { TeamStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageStoryblokMapper } from '../image/image';

export function teamsMapper(persons: StoryblokStory<TeamStoryblok>[]): TeamInterface[] {
  return persons.map(person => teamMapper(person));
}

export function teamMapper(team: StoryblokStory<TeamStoryblok>): TeamInterface {
  return {
    name: team.content?.name ?? '',
    role: team.content?.role ?? null,
    image: imageStoryblokMapper(team.content?.image),
  };
}
