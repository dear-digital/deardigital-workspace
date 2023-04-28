import { BlogInterface } from './blog';

export type BlogCardInterface = Pick<BlogInterface, "title" | "slug" | "thumbnail">;
