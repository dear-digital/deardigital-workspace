import { ClientInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageMapper } from '../image';


export function clientMapper(item: StoryblokStory<ClientStoryblok>): ClientInterface {
  return {
    name: item.name,
    // logo: imageMapper(item.)
  }
}
