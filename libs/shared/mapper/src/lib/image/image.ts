import { MediaInterface } from '@deardigital/shared/interfaces';
import { AssetStoryblok } from '@deardigital/shared/schema';
import { ratioMapper } from '../ratio';


export function imageStoryblokMapper(
  media: AssetStoryblok | undefined,
  ratio?: string,
): MediaInterface | null {
  if (!media) return null;

  return {
    url: media.filename,
    alt: media.alt ?? null,
    ratio: ratioMapper(ratio),
  };
}

export function imageShopifyMapper(
  media: string | undefined,
): MediaInterface | null {
  if (!media) return null;

  return {
    url: media,
    alt: null,
  };
}
