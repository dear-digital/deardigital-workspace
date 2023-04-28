import { ClientInterface } from '../client/client';
import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';
import { ServiceCardInterface } from '../service/service-card';

export interface WorkInterface extends PageInterface {
  title: string;
  slug: string;
  client: ClientInterface | null;
  services: ServiceCardInterface[];
  thumbnail: MediaInterface | null;
}
