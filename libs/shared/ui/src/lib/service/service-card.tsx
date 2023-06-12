import { ServiceCardInterface } from '@deardigital/shared/interfaces';
import Link from 'next/link';
import ImageRenderer from '../image-renderer/image-renderer';

/* eslint-disable-next-line */
export interface ServiceCardProps extends ServiceCardInterface { }

export function ServiceCard({ thumbnail, title, slug }: ServiceCardProps) {
  return (
    <div className="h-100 border-0 shadow shadow-hover card-cta">
      {thumbnail && (
        <ImageRenderer className="img-fit-cover card-img-top" image={thumbnail} />
      )}
      <div className="d-flex flex-column">
        <div className="mb-3">
          {title && <h4 className="card-title">{title}</h4>}
          {slug && <Link href={slug} className="btn btn-primary stretched-link">Read more</Link>}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
