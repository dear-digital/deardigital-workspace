import { ContentBlockInterface, ContentBlogInterface, ContentFeaturedProductsInterface, ContentFeaturedWorkInterface, ContentImageInterface, ContentPodcastInterface, ContentServicesInterface, ContentTextImageInterface, ContentTextInterface, ContentWorkInterface, MappingFunction } from '@deardigital/shared/interfaces';
import ContentBlog from './blogs';
import ContentFeaturedProducts from './featured-products';
import ContentFeaturedWork from './featured-work';
import ContentImage from './image';
import ContentPodcast from './podcasts';
import ContentServices from './services';
import ContentText from './text';
import ContentTextImage from './text-image';
import ContentWork from './works';

/* eslint-disable-next-line */
export interface ContentBlocksProps {
  contentBlocks: ContentBlockInterface[];
}

const componentMapping = new Map<
  string,
  MappingFunction<ContentBlockInterface, JSX.Element>
>([
  ['blogs', (props) => <ContentBlog key={props._uid} {...(props as ContentBlogInterface)} />],
  ['featuredProducts', (props) => <ContentFeaturedProducts key={props._uid} {...(props as ContentFeaturedProductsInterface)} />],
  ['featuredWork', (props) => <ContentFeaturedWork key={props._uid} {...(props as ContentFeaturedWorkInterface)} />],
  ['image', (props) => <ContentImage key={props._uid} {...(props as ContentImageInterface)} />],
  ['podcasts', (props) => <ContentPodcast key={props._uid} {...(props as ContentPodcastInterface)} />],
  ['services', (props) => <ContentServices key={props._uid} {...(props as ContentServicesInterface)} />],
  ['textImage', (props) => <ContentTextImage key={props._uid} {...(props as ContentTextImageInterface)} />],
  ['text', (props) => <ContentText key={props._uid} {...(props as ContentTextInterface)} />],
  ['works', (props) => <ContentWork key={props._uid} {...(props as ContentWorkInterface)} />],
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
