import { ContentBlockInterface, ContentFeaturedWorkInterface, ContentImageInterface, ContentTextInterface, MappingFunction } from '@deardigital/shared/interfaces';
import ContentFeaturedWork from './featured-work';
import ContentImage from './image';
import ContentText from './text';

/* eslint-disable-next-line */
export interface ContentBlocksProps {
  contentBlocks: ContentBlockInterface[];
}

const componentMapping = new Map<
  string,
  MappingFunction<ContentBlockInterface, JSX.Element>
>([
  ['featuredWork', (props) => <ContentFeaturedWork key={props._uid} {...(props as ContentFeaturedWorkInterface)} />],
  ['image', (props) => <ContentImage key={props._uid} {...(props as ContentImageInterface)} />],
  ['text', (props) => <ContentText key={props._uid} {...(props as ContentTextInterface)} />],
]);

export function ContentBlocks({ contentBlocks = [] }: ContentBlocksProps) {
  const renderBlock = (props: ContentBlockInterface) => {
    if (!props.component) {
      throw new Error('Content block cannot be rendered because component is undefined.');
    }

    const componentControl = componentMapping.get(props.component);
    if (!componentControl) {
      throw new Error(`Content block of type ${props.component} is missing a template`);
    }

    return componentControl(props);
  };

  return <>{contentBlocks.map((block) => renderBlock(block))}</>;
}

export default ContentBlocks;
