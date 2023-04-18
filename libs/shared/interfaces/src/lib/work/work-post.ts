import { Client } from '../client/client';
import { MediaInterface } from '../media';
import { ServiceInterface } from '../service/service';

export interface WorkPostInterface {
    title: string;
    slug: string;
    client: Client;
    services: ServiceInterface[];
    thumbnail: MediaInterface | null;
}
