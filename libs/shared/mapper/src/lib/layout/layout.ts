import { TEXT_IMAGE_LAYOUTS, TextImageLayoutType } from '@deardigital/shared/constants';

export function textImageLayoutMapper(type: string): TextImageLayoutType {
  if (!type) return TEXT_IMAGE_LAYOUTS.textMedia;

  const mapping = new Map<string, TextImageLayoutType>([
    ['textMedia', TEXT_IMAGE_LAYOUTS.textMedia],
    ['mediaText', TEXT_IMAGE_LAYOUTS.mediaText],
  ]);

  const layout = mapping.get(type);
  if (!layout) {
    throw new Error(`Layout of type ${type} is missing in textImageLayoutMapper.`);
  }

  return layout;
}
