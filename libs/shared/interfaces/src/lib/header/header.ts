import { LinkInterface } from '../link/link';

export interface HeaderInterface {
    navigation: LinkInterface[];
    cta: LinkInterface | null;
}
