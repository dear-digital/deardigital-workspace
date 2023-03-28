import { SectionInterface } from '@deardigital/shared/interfaces';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface SectionProps extends SectionInterface {
  children: ReactNode;
  className?: string;
}

export function Section({
  theme,
  children,
  className = '',
  spacing,
  slug
}: SectionProps) {
  return (
    <section className={`section ${theme?.background} ${spacing} ${className}`} {...(slug ? { 'id': slug} : {})}>
      {children}
    </section>
  );
}

export default Section;
