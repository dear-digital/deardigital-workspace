import { GlobalInterface } from '@deardigital/shared/interfaces';
import { globalsMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';

export async function getGlobals(preview: boolean): Promise<GlobalInterface | null> {
  const globals = await getStoryblokApi().get("cdn/stories/global", {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
  })

  if (!globals) {
    throw new Error(`Globals could not be fetched`)
  }

  return globalsMapper(globals.data.story)
}
