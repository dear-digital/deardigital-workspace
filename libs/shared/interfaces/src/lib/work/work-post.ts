import { ClientInterface } from '../client/client';
import { MediaInterface } from '../media';
import { ServiceInterface } from '../service/service';

export interface WorkPostInterface {
    name: string;
    slug: string;
    client: ClientInterface;
    services: ServiceInterface[];
    thumbnail: MediaInterface | null;
}