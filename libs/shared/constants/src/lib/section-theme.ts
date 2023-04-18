import { BACKGROUNDS } from './background';
import { COLORS } from './color';

export const SECTION_THEMES = {
  light: {
    color: COLORS.light,
    background: BACKGROUNDS.light,
  },
  dark: {
    color: COLORS.dark,
    background: BACKGROUNDS.dark,
  }
} as const;

type ObjectValues<T> = T[keyof T];
export type SectionThemeType = ObjectValues<typeof SECTION_THEMES>
