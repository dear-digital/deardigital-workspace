export const SPACINGS = {
  sm: 'py-7 py-md-8',
  md: 'py-8 py-md-9',
  lg: 'py-8 py-md-10',
}

type ObjectValues<T> = T[keyof T];
export type SpacingType = ObjectValues<typeof SPACINGS>;
