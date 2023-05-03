import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface BlogStoryblok {
  description?: string;
  thumbnail: AssetStoryblok;
  hero?: never[];
  contentBlocks?: (
    | BlogsStoryblok
    | ClientLogosStoryblok
    | FeaturedPodcastStoryblok
    | FeaturedProductsStoryblok
    | FeaturedWorkStoryblok
    | ImageStoryblok
    | PodcastsStoryblok
    | ServicesStoryblok
    | TextStoryblok
    | TextImageStoryblok
    | WorksStoryblok
  )[];
  _uid: string;
  component: "blog";
  [k: string]: any;
}

export interface BlogsStoryblok {
  text?: any;
  section: SectionStoryblok[];
  _uid: string;
  component: "blogs";
  [k: string]: any;
}

export interface ClientStoryblok {
  name?: string;
  logo: AssetStoryblok;
  _uid: string;
  component: "client";
  [k: string]: any;
}

export interface ClientLogosStoryblok {
  text?: any;
  clients: (StoryblokStory<ClientStoryblok> | string)[];
  section: SectionStoryblok[];
  _uid: string;
  component: "clientLogos";
  [k: string]: any;
}

export interface FeaturedPodcastStoryblok {
  text?: any;
  podcast: StoryblokStory<PodcastStoryblok> | string;
  section: SectionStoryblok[];
  _uid: string;
  component: "featuredPodcast";
  [k: string]: any;
}

export interface FeaturedProductsStoryblok {
  text?: any;
  products?: string;
  section: SectionStoryblok[];
  _uid: string;
  component: "featuredProducts";
  [k: string]: any;
}

export interface FeaturedWorkStoryblok {
  text?: any;
  work: (StoryblokStory<WorkStoryblok> | string)[];
  section: SectionStoryblok[];
  _uid: string;
  component: "featuredWork";
  [k: string]: any;
}

export interface GlobalStoryblok {
  header?: HeaderStoryblok[];
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface HeaderStoryblok {
  navigation?: LinkStoryblok[];
  cta?: LinkStoryblok[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface ImageStoryblok {
  image: AssetStoryblok;
  ratio?: "ratio_1x1" | "ratio_16x9" | "ratio_21x9";
  fullWidth?: boolean;
  section: SectionStoryblok[];
  _uid: string;
  component: "image";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface LinkStoryblok {
  label?: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface PageStoryblok {
  hero?: any[];
  contentBlocks?: (
    | BlogsStoryblok
    | ClientLogosStoryblok
    | FeaturedPodcastStoryblok
    | FeaturedProductsStoryblok
    | FeaturedWorkStoryblok
    | ImageStoryblok
    | PodcastsStoryblok
    | ServicesStoryblok
    | TextStoryblok
    | TextImageStoryblok
    | WorksStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PodcastStoryblok {
  audio?: MultilinkStoryblok;
  description?: string;
  thumbnail: AssetStoryblok;
  hero?: never[];
  contentBlocks?: (
    | BlogsStoryblok
    | ClientLogosStoryblok
    | FeaturedPodcastStoryblok
    | FeaturedProductsStoryblok
    | FeaturedWorkStoryblok
    | ImageStoryblok
    | PodcastsStoryblok
    | ServicesStoryblok
    | TextStoryblok
    | TextImageStoryblok
    | WorksStoryblok
  )[];
  _uid: string;
  component: "podcast";
  [k: string]: any;
}

export interface PodcastsStoryblok {
  text?: any;
  section: SectionStoryblok[];
  _uid: string;
  component: "podcasts";
  [k: string]: any;
}

export interface SectionStoryblok {
  theme: "dark" | "light";
  spacing: "small" | "medium" | "large";
  slug?: string;
  _uid: string;
  component: "section";
  [k: string]: any;
}

export interface ServiceStoryblok {
  description?: string;
  thumbnail: AssetStoryblok;
  hero?: never[];
  contentBlocks?: (
    | BlogsStoryblok
    | ClientLogosStoryblok
    | FeaturedPodcastStoryblok
    | FeaturedProductsStoryblok
    | FeaturedWorkStoryblok
    | ImageStoryblok
    | PodcastsStoryblok
    | ServicesStoryblok
    | TextStoryblok
    | TextImageStoryblok
    | WorksStoryblok
  )[];
  _uid: string;
  component: "service";
  [k: string]: any;
}

export interface ServicesStoryblok {
  text?: any;
  section: SectionStoryblok[];
  _uid: string;
  component: "services";
  [k: string]: any;
}

export interface TechnologyStoryblok {
  name?: string;
  logo: AssetStoryblok;
  _uid: string;
  component: "technology";
  [k: string]: any;
}

export interface TextStoryblok {
  text?: any;
  section: SectionStoryblok[];
  _uid: string;
  component: "text";
  [k: string]: any;
}

export interface TextImageStoryblok {
  text?: any;
  image?: AssetStoryblok;
  ratio?: "ratio_1x1" | "ratio_16x9" | "ratio_21x9";
  layout: "textMedia" | "mediaText";
  alignment: "start" | "center" | "end";
  section: SectionStoryblok[];
  _uid: string;
  component: "textImage";
  [k: string]: any;
}

export interface WorkStoryblok {
  hero?: never[];
  contentBlocks?: (
    | BlogsStoryblok
    | ClientLogosStoryblok
    | FeaturedPodcastStoryblok
    | FeaturedProductsStoryblok
    | FeaturedWorkStoryblok
    | ImageStoryblok
    | PodcastsStoryblok
    | ServicesStoryblok
    | TextStoryblok
    | TextImageStoryblok
    | WorksStoryblok
  )[];
  client: StoryblokStory<ClientStoryblok> | string;
  services: (StoryblokStory<ServiceStoryblok> | string)[];
  thumbnail: AssetStoryblok;
  _uid: string;
  component: "work";
  [k: string]: any;
}

export interface WorksStoryblok {
  text?: any;
  section: SectionStoryblok[];
  _uid: string;
  component: "works";
  [k: string]: any;
}
