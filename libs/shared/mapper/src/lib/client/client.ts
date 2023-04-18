import { Client } from '@deardigital/shared/interfaces';
import { imageMapper } from '../image';


export function clientMapper(item: any): Client {
  return {
    name: item.name,
    logo: imageMapper(item.logo)
  }
}
