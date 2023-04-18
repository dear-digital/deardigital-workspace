export const TEXT_IMAGE_LAYOUTS = {
    textMedia: "textMedia",
    mediaText: "mediaText",
} as const;

type ObjectValues<T> = T[keyof T];
export type TextImageLayoutType = ObjectValues<typeof TEXT_IMAGE_LAYOUTS>
