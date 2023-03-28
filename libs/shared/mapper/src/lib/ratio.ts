import { RatioConstants, RatioType } from '@deardigital/shared/constants';

const ratioMapping = new Map<string, RatioType>([
  ["ratio_1x1", RatioConstants.ratio_1x1],
  ["ratio_16x9", RatioConstants.ratio_16x9],
  ["ratio_21x9", RatioConstants.ratio_21x9],
]);

export function ratioMapper(block: string | undefined): RatioType | undefined {
  if (!block) return RatioConstants.ratio_1x1;

  const ratio = ratioMapping.get(block);
  if (!ratio) {
    throw new Error(`Ratio of type ${block} is missing a ratioMapper.`);
  }

  return ratio;
}
