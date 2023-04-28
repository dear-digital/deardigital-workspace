import { ClientInterface } from '../client/client';
import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';
import { ServiceInterface } from '../service/service';

export interface WorkInterface extends PageInterface {
  title: string;
  slug: string;
  client: ClientInterface;
  services: ServiceInterface[];
  thumbnail: MediaInterface | null;
}
