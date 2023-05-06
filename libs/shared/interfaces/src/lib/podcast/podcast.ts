import { PodcastHeroInterface } from '../hero-blocks/podcast';
import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';
import { PersonInterface } from '../person/person';
import { TeamInterface } from '../team/team';

export interface PodcastInterface extends PageInterface {
    title: string;
    slug: string;
    description: string | null;
    audio: string | null;
    guest: PersonInterface;
    host: TeamInterface;
    hero: PodcastHeroInterface;
    thumbnail: MediaInterface | null;
}
