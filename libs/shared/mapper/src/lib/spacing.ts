import { SPACINGS, SpacingType } from '@deardigital/shared/constants';

const spacingMapping = new Map<string, SpacingType>([
  ['small', SPACINGS.sm],
  ['medium', SPACINGS.md],
  ['large', SPACINGS.lg],
]);

export function spacingMapper(block: string): SpacingType {
  if (!block) return SPACINGS.md;

  const spacing = spacingMapping.get(block);
  if (!spacing) {
    throw new Error(`Spacing of type ${block} is missing a spacingMapper.`);
  }

  return spacing;
}
