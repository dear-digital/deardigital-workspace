import { SbBlokData } from '@storyblok/react';
import { ContentImageInterface } from './image';
import { ContentTextInterface } from './text';

export interface ContentBlockBaseInterface extends SbBlokData {
    _uid: string;
    component: string;
    _editable?: string;
};

export type ContentBlockInterface = ContentTextInterface | ContentImageInterface;