import { ServiceCardInterface } from '../service/service-card';
import { WorkInterface } from './work';

export type WorkCardInterface = Pick<WorkInterface, "title" | "slug" | "client" | "thumbnail"> & {
  services: ServiceCardInterface[];
};

