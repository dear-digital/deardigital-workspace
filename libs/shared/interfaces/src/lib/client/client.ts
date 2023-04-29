import { MediaInterface } from '../media';

export interface ClientInterface {
    name: string | null;
    logo?: MediaInterface | null;
}
