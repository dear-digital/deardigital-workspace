import { SpacingConstant, SpacingType } from '@deardigital/shared/constants';

const spacingMapping = new Map<string, SpacingType>([
  ['small', SpacingConstant.sm],
  ['medium', SpacingConstant.md],
  ['large', SpacingConstant.lg],
]);

export function spacingMapper(block: string): SpacingType {
  if (!block) return SpacingConstant.md;

  const spacing = spacingMapping.get(block);
  if (!spacing) {
    throw new Error(`Spacing of type ${block} is missing a spacingMapper.`);
  }

  return spacing;
}
