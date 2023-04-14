export const PageTypeConstant = {
    home: "",
    client: "client/",
    page: "page/",
    service: "service/",
    work: "work/",
} as const;

type ObjectValues<T> = T[keyof T];
export type PageTypeType = ObjectValues<typeof PageTypeConstant>
