import { SECTION_THEMES, SPACINGS } from '@deardigital/shared/constants';
import { SectionInterface } from '@deardigital/shared/interfaces';
import { SectionStoryblok } from '@deardigital/shared/schema';
import { spacingMapper } from './spacing';
import { themeMapper } from './theme';

export function sectionMapper(section: SectionStoryblok | undefined): SectionInterface {
  if (!section) {
    return {
      theme: SECTION_THEMES.light,
      spacing: SPACINGS.md,
      slug: null
    };
  }

  return {
    theme: themeMapper(section.theme),
    spacing: spacingMapper(section.spacing),
    slug: section.slug ?? null,
  };
}
