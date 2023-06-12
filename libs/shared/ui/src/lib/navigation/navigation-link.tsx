'use client';

import { LinkInterface } from '@deardigital/shared/interfaces';
import { usePathname } from 'next/navigation';
import LinkRenderer from '../link/link-renderer.component';

/* eslint-disable-next-line */
export interface NavigationLinkProps extends LinkInterface { }

export function NavigationLink(props: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.indexOf(props.link) > -1;
  const className = `block py-2 pl-3 pr-4 rounded ${isActive ? 'text-white bg-blue-700  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`;

  return (
    <li>
      <LinkRenderer {...props} className={className} {...(isActive ? { 'aria-current': 'page' } : {})}>
        {props.label}
      </LinkRenderer>
    </li>
  );
}

export default NavigationLink;
