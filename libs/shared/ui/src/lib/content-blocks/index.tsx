import { ContentBlockInterface, ContentBlogInterface, ContentClientLogosInterface, ContentFeaturedPodcastInterface, ContentFeaturedProductsInterface, ContentFeaturedWorkInterface, ContentImageInterface, ContentPodcastInterface, ContentServicesInterface, ContentTextImageInterface, ContentTextInterface, ContentWorkInterface, ContentYoutubeInterface, MappingFunction } from '@deardigital/shared/interfaces';
import ContentBlog from './blogs';
import ContentClientLogos from './client-logos';
import ContentFeaturedPodcast from './featured-podcast';
import ContentFeaturedProducts from './featured-products';
import ContentFeaturedWork from './featured-work';
import ContentImage from './image';
import ContentPodcast from './podcasts';
import ContentServices from './services';
import ContentText from './text';
import ContentTextImage from './text-image';
import ContentWork from './works';
import ContentYoutube from './youtube';

/* eslint-disable-next-line */
export interface ContentBlocksProps {
  contentBlocks: ContentBlockInterface[];
}

const componentMapping = new Map<
  string,
  MappingFunction<ContentBlockInterface, JSX.Element>
>([
  ['blogs', (props) => <ContentBlog key={props._uid} {...(props as ContentBlogInterface)} />],
  ['clientLogos', (props) => <ContentClientLogos key={props._uid} {...(props as ContentClientLogosInterface)} />],
  ['featuredPodcast', (props) => <ContentFeaturedPodcast key={props._uid} {...(props as ContentFeaturedPodcastInterface)} />],
  ['featuredProducts', (props) => <ContentFeaturedProducts key={props._uid} {...(props as ContentFeaturedProductsInterface)} />],
  ['featuredWork', (props) => <ContentFeaturedWork key={props._uid} {...(props as ContentFeaturedWorkInterface)} />],
  ['image', (props) => <ContentImage key={props._uid} {...(props as ContentImageInterface)} />],
  ['podcasts', (props) => <ContentPodcast key={props._uid} {...(props as ContentPodcastInterface)} />],
  ['services', (props) => <ContentServices key={props._uid} {...(props as ContentServicesInterface)} />],
  ['textImage', (props) => <ContentTextImage key={props._uid} {...(props as ContentTextImageInterface)} />],
  ['text', (props) => <ContentText key={props._uid} {...(props as ContentTextInterface)} />],
  ['works', (props) => <ContentWork key={props._uid} {...(props as ContentWorkInterface)} />],
  ['youtube', (props) => <ContentYoutube key={props._uid} {...(props as ContentYoutubeInterface)} />],
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
