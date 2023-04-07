import { TextImageLayoutConstant, TextImageLayoutType } from '@deardigital/shared/constants';

export function textImageLayoutMapper(type: string): TextImageLayoutType {
  if (!type) return TextImageLayoutConstant.textMedia;

  const mapping = new Map<string, TextImageLayoutType>([
    ['textMedia', TextImageLayoutConstant.textMedia],
    ['mediaText', TextImageLayoutConstant.mediaText],
  ]);

  const layout = mapping.get(type);
  if (!layout) {
    throw new Error(`Layout of type ${type} is missing in textImageLayoutMapper.`);
  }

  return layout;
}
