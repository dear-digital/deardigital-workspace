export const RatioConstants = {
  ratio_1x1: 'ratio ratio-1x1',
  ratio_16x9: 'ratio ratio-16x9',
  ratio_21x9: 'ratio ratio-21x9',
} as const

type ObjectValues<T> = T[keyof T];
export type RatioType = ObjectValues<typeof RatioConstants>