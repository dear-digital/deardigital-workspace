import { SectionThemesConstant, SectionThemeType } from '@deardigital/shared/constants';

const themeMapping = new Map<string, SectionThemeType>([
  ['light', SectionThemesConstant.light],
  ['dark', SectionThemesConstant.dark],
]);

export function themeMapper(block: string): SectionThemeType {
  if (!block) return SectionThemesConstant.light;

  const theme = themeMapping.get(block);
  if (!theme) {
    throw new Error(`Theme of type ${block} is missing a themeMapper.`);
  }

  return theme;
}
