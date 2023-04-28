export const PAGE_TYPES = {
    home: "home",
    page: "page/",
    blog: "blog/",
    client: "client/",
    services: "services/",
    podcast: "podcast/",
    work: "work/",
} as const;

type ObjectValues<T> = T[keyof T];
export type PageTypeType = ObjectValues<typeof PAGE_TYPES>
