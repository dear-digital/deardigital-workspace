import { MediaInterface } from '../media';

export interface ClientInterface {
    name: string;
    logo?: MediaInterface | null;
}
