import { RatioType } from '@deardigital/shared/constants';

export interface MediaInterface {
  url: string;
  alt: string;  
  ratio?: RatioType | null;
}
