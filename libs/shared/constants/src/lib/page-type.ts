export const PAGE_TYPES = {
    client: "client/",
    page: "page/",
    services: "services/",
    work: "work/",
} as const;

type ObjectValues<T> = T[keyof T];
export type PageTypeType = ObjectValues<typeof PAGE_TYPES>
