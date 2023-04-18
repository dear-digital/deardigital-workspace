import { ContentBlockInterface, ContentFeaturedProducts, ContentFeaturedWorkInterface, ContentImageInterface, ContentTextImageInterface, ContentTextInterface, MappingFunction } from '@deardigital/shared/interfaces';
import ContentFeaturedProducts from './featured-products';
import ContentFeaturedWork from './featured-work';
import ContentImage from './image';
import ContentText from './text';
import ContentTextImage from './text-image';

/* eslint-disable-next-line */
export interface ContentBlocksProps {
  contentBlocks: ContentBlockInterface[];
}

const componentMapping = new Map<
  string,
  MappingFunction<ContentBlockInterface, JSX.Element>
>([
  ['featuredProducts', (props) => <ContentFeaturedProducts key={props._uid} {...(props as ContentFeaturedProducts)} />],
  ['featuredWork', (props) => <ContentFeaturedWork key={props._uid} {...(props as ContentFeaturedWorkInterface)} />],
  ['image', (props) => <ContentImage key={props._uid} {...(props as ContentImageInterface)} />],
  ['textImage', (props) => <ContentTextImage key={props._uid} {...(props as ContentTextImageInterface)} />],
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
