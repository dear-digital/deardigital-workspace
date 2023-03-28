import { MediaInterface } from '@deardigital/shared/interfaces';

export interface ImageRendererProps {
  image: MediaInterface | null;
  className?: string;
}

export function ImageRenderer({ image, className = '' }: ImageRendererProps) {
  if (!image) {
    return null;
  }

  if (image.ratio) {
    return (
      <div className={image.ratio}>
        <img src={image?.url} className={className} alt={image?.alt} />
      </div>
    );
  }

  return <img src={image?.url} className={className} alt={image?.alt} />;
}

export default ImageRenderer;
