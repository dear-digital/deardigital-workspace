export const LinkTypeConstant = {
    email: "email",
    page: "page",
    phone: "phone",
    web: "web",
} as const;

type ObjectValues<T> = T[keyof T];
export type LinkTypeType = ObjectValues<typeof LinkTypeConstant>