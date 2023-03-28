export const BackgroundsConstant = {
    light: "bg-light",
    dark: "bg-dark",
} as const;

type ObjectValues<T> = T[keyof T];
export type BackgroundType = ObjectValues<typeof BackgroundsConstant>