import { SectionThemeType, SpacingType } from "@deardigital/shared/constants";

export interface SectionInterface {
  theme: SectionThemeType | null;
  spacing: SpacingType | null;
  slug?: string | null;
}
