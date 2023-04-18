import { LINK_TYPES } from '@deardigital/shared/constants';
import { LinkInterface } from '@deardigital/shared/interfaces';
import { MultilinkStoryblok } from '@deardigital/shared/schema';

const mapLinkTypeToLinkInterface = new Map<string, (link: MultilinkStoryblok, label?: string) => LinkInterface>([
  ["story", mapPage],
  ["asset", mapUrl],
  ["url", mapUrl],
  ["email", mapEmail],
]);

export function linkMapper(link: MultilinkStoryblok, label?: string): LinkInterface {
  const mapper = mapLinkTypeToLinkInterface.get(link.linktype ?? "");
  if (!mapper) {
    throw new Error(`Link type "${link.linktype}" not supported`);
  }
  return mapper(link, label);
}


function mapPage(link: MultilinkStoryblok, label?: string): LinkInterface {
  return {
    type: LINK_TYPES.page,
    link: link.story?.slug ?? "",
    label: label ?? link.story?.name ?? "",
  };
}

function mapUrl(link: MultilinkStoryblok, label?: string): LinkInterface {
  return {
    type: LINK_TYPES.web,
    link: link.url ?? "",
    label: label ?? "",
    target: link?.['target'] ?? "_self",
  };
}

function mapEmail(link: MultilinkStoryblok, label?: string): LinkInterface {
  return {
    type: LINK_TYPES.email,
    link: link.email ?? "",
    label: label ?? link.email ?? "",
  };
}
