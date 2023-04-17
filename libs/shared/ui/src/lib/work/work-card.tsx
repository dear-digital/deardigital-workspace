import { WorkPostInterface } from '@deardigital/shared/interfaces';
import { Card } from 'react-bootstrap';
import ImageRenderer from '../image-renderer/image-renderer';

/* eslint-disable-next-line */
export interface WorkCardProps extends WorkPostInterface { }

export function WorkCard({ thumbnail, title: name, client, services }: WorkCardProps) {
  return (
    <Card className="h-100 border-0 shadow shadow-hover card-cta">
      {thumbnail && (
        <ImageRenderer className="img-fit-cover card-img-top" image={thumbnail} />
      )}
      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          {client && <span className="d-block h5 mb-1">{client.name}</span>}
          {name && <h4 className="card-title">{name}</h4>}
          {services.map((item, key) => (
            <span key={key} className='badge rounded-pill text-bg-primary'>{item.title}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
