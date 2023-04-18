export const COLORS = {
    light: "text-light",
    dark: "text-dark",
} as const;

type ObjectValues<T> = T[keyof T];
export type ColorType = ObjectValues<typeof COLORS>
