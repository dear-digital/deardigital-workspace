'use client';

import { LinkInterface } from '@deardigital/shared/interfaces';
import { usePathname } from 'next/navigation';
import LinkRenderer from '../link/link-renderer.component';

/* eslint-disable-next-line */
export interface NavigationLinkProps extends LinkInterface { }

export function NavigationLink(props: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.indexOf(props.link) > -1;
  const className = isActive ? 'nav-link active' : 'nav-link';

  return (
    <li className="nav-item d-inline">
      <LinkRenderer {...props} className="d-inline-block py-lg-4" {...(isActive ? { 'aria-current': 'page' } : {})}>
        <span className={className}>{props.label}</span>
      </LinkRenderer>
    </li>
  );
}

export default NavigationLink;
