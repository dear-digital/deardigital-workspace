import { ContentClientLogosInterface, MetaType } from '@deardigital/shared/interfaces';
import { ClientLogosStoryblok } from '@deardigital/shared/schema';
import { clientsMapper } from '../client/client';
import { sectionMapper } from '../section';

export function mapContentBlockClientLogos(content: ClientLogosStoryblok, meta: MetaType): ContentClientLogosInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    clients: clientsMapper(content.clients, meta),
    section: sectionMapper(content.section?.[0]),
  };
}
