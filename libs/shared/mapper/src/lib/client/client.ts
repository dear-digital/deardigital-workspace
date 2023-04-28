import { ClientInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';


export function clientMapper(item: StoryblokStory<ClientStoryblok>): ClientInterface {
  return {
    name: item?.name ?? '',
    // logo: imageMapper(item.)
  }
}
