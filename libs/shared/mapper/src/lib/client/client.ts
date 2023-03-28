import { ClientInterface } from '@deardigital/shared/interfaces';
import { imageMapper } from '../image';


export function clientMapper(item: any): ClientInterface {
    return {
        name: item.name,
        logo: imageMapper(item.logo)
    }
}