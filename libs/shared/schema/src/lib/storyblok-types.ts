export interface StoryblokTypes {
    story: Story;
    cv:    number;
    rels:  any[];
    links: any[];
}

export interface Story {
    name:               string;
    created_at:         Date;
    published_at:       Date;
    id:                 number;
    uuid:               string;
    content:            StoryContent;
    slug:               string;
    full_slug:          string;
    sort_by_date:       null;
    position:           number;
    tag_list:           any[];
    is_startpage:       boolean;
    parent_id:          number;
    meta_data:          null;
    group_id:           string;
    first_published_at: Date;
    release_id:         null;
    lang:               string;
    path:               string;
    alternates:         any[];
    default_full_slug:  null;
    translated_slugs:   null;
}

export interface StoryContent {
    _uid:          string;
    hero:          any[];
    component:     string;
    contentBlocks: ContentBlock[];
}

export interface ContentBlock {
    _uid:       string;
    text?:      Text;
    work?:      string[];
    component:  string;
    section?:   Section[];
    image?:     Image;
    ratio?:     string;
    fullWidth?: boolean;
}

export interface Image {
    id:              number;
    alt:             string;
    name:            string;
    focus:           string;
    title:           string;
    filename:        string;
    copyright:       string;
    fieldtype:       string;
    is_external_url: boolean;
}

export interface Section {
    _uid:      string;
    theme:     string;
    spacing:   string;
    component: string;
    slug?:     string;
}

export interface Text {
    type:    string;
    content: TextContent[];
}

export interface TextContent {
    type:    string;
    attrs?:  Attrs;
    content: ContentContent[];
}

export interface Attrs {
    level: number;
}

export interface ContentContent {
    text:   string;
    type:   string;
    marks?: Mark[];
}

export interface Mark {
    type: string;
}
