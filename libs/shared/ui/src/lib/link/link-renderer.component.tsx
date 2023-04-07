import { LinkTypeConstant, LinkTypeType } from '@deardigital/shared/constants';
import { LinkInterface, MappingFunction } from '@deardigital/shared/interfaces';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface LinkRendererProps extends LinkInterface {
  children?: React.ReactNode;
}

const componentMapping = new Map<
  LinkTypeType,
  MappingFunction<LinkRendererProps, JSX.Element>
>([
  [LinkTypeConstant.page, (props) => <Link {...props} href={props.link}>{props.children ?? props.label}</Link>],
  [LinkTypeConstant.web, (props) => <a {...props} href={props.link}>{props.children ?? props.label}</a>],
]);

export function LinkRenderer(props: LinkRendererProps) {
  if (!props.type) {
    return null
  }

  const componentControl = componentMapping.get(props.type);
  if (!componentControl) {
    return null
  }

  return componentControl(props);
}

export default LinkRenderer;
