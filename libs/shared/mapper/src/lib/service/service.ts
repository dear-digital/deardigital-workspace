import { ServiceInterface } from '@deardigital/shared/interfaces';


export function servicesMapper(items: any[]): ServiceInterface[] {
  return items.map(item => serviceMapper(item));
}

export function serviceMapper(item: any): ServiceInterface {
  return {
    name: item.name,
  }
}
