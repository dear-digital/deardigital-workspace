import { SECTION_THEMES, SectionThemeType } from '@deardigital/shared/constants';

const themeMapping = new Map<string, SectionThemeType>([
  ['light', SECTION_THEMES.light],
  ['dark', SECTION_THEMES.dark],
]);

export function themeMapper(block: string): SectionThemeType {
  if (!block) return SECTION_THEMES.light;

  const theme = themeMapping.get(block);
  if (!theme) {
    throw new Error(`Theme of type ${block} is missing a themeMapper.`);
  }

  return theme;
}
