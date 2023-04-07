export const TextImageLayoutConstant = {
    textMedia: "textMedia",
    mediaText: "mediaText",
} as const;

type ObjectValues<T> = T[keyof T];
export type TextImageLayoutType = ObjectValues<typeof TextImageLayoutConstant>