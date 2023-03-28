import { BackgroundsConstant } from './background';
import { ColorsConstant } from './color';

export const SectionThemesConstant = {
  light: {
    color: ColorsConstant.light,
    background: BackgroundsConstant.light,    
  },
  dark: {
    color: ColorsConstant.dark,
    background: BackgroundsConstant.dark,    
  } 
} as const;

type ObjectValues<T> = T[keyof T];
export type SectionThemeType = ObjectValues<typeof SectionThemesConstant>