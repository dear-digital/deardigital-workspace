import { MediaInterface } from '@deardigital/shared/interfaces';
import { Image } from '@deardigital/shared/schema';
import { ratioMapper } from './ratio';


export function imageMapper(
  media: Image | undefined,
  ratio?: string,
): MediaInterface | null {
  if (!media) return null;

  return {
    url: media.filename,
    alt: media.alt,
    ratio: ratioMapper(ratio),
  };
}
