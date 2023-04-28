import { ClientInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';


export function clientMapper(client?: StoryblokStory<ClientStoryblok>): ClientInterface | null {
  if(!client) return null;

  return {
    name: client.name,
    // logo: imageMapper(item.)
  }
}
