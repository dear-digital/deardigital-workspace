import { MediaInterface } from '../media';

export interface PersonInterface {
  name: string,
  role: string | null,
  image: MediaInterface | null,
}
