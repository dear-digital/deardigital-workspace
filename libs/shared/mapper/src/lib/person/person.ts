import { PersonInterface } from '@deardigital/shared/interfaces';
import { PersonStoryblok } from '@deardigital/shared/schema';
import { imageStoryblokMapper } from '../image/image';

export function personsMapper(persons: PersonStoryblok[]): PersonInterface[] {
  return persons.map(person => personMapper(person));
}

export function personMapper(person: PersonStoryblok): PersonInterface {
  return {
    name: person.name,
    role: person.role ?? null,
    image: imageStoryblokMapper(person.image),
  };
}
