export const VerticalAlignmentConstant = {
    start: "align-items-start",
    center: "align-items-center",
    end: "align-items-end",
} as const;

type ObjectValues<T> = T[keyof T];
export type VerticalAlignmentType = ObjectValues<typeof VerticalAlignmentConstant>
