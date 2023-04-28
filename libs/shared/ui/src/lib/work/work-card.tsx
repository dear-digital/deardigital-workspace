import { WorkCardInterface } from '@deardigital/shared/interfaces';
import { Card } from 'react-bootstrap';
import ImageRenderer from '../image-renderer/image-renderer';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface WorkCardProps extends WorkCardInterface { }

export function WorkCard({ thumbnail, title, client, services, slug }: WorkCardProps) {
  return (
    <Card className="h-100 border-0 shadow shadow-hover card-cta">
      {thumbnail && (
        <ImageRenderer className="img-fit-cover card-img-top" image={thumbnail} />
      )}
      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          {client && <span className="d-block h5 mb-1">{client.name}</span>}
          {title && <h4 className="card-title">{title}</h4>}
          {services.map((item, key) => (
            <span key={key} className='badge rounded-pill text-bg-primary'>{item.title}</span>
          ))}

          {slug && <Link href={slug} className="btn btn-primary stretched-link">Read more</Link>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
