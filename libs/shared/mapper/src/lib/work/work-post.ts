import { WorkPostInterface } from '@deardigital/shared/interfaces';
import { MetaType } from '@deardigital/shared/schema';
import { servicesMapper } from '../service/service';
import { imageMapper } from '../image';
import { clientMapper } from '../client/client';


export function workPostMapper(items: any, meta: MetaType): WorkPostInterface[] {
    return items.map((work: any) => {
        const client = meta.rels.find(item => item.uuid === work.content.client);
        const services = work.content.services.map((service: any) => meta.rels.find(item => item.uuid === service));

        return {
            name: work.name,
            slug: work.slug,
            services: servicesMapper(services),
            client: clientMapper(client),
            thumbnail: imageMapper(work.content.thumbnail)
        }
    })
}
