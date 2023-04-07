import { LinkTypeType } from '@deardigital/shared/constants';

export interface LinkInterface {
    type: LinkTypeType;
    className?: string;
    link: string;
    label: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}