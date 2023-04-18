export const LINK_TYPES = {
    email: "email",
    page: "page",
    phone: "phone",
    web: "web",
} as const;

type ObjectValues<T> = T[keyof T];
export type LinkTypeType = ObjectValues<typeof LINK_TYPES>
