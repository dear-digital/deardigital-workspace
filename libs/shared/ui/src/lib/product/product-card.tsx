import { ProductCardInterface } from '@deardigital/shared/interfaces';
import ImageRenderer from '../image-renderer/image-renderer';

/* eslint-disable-next-line */
export interface ProductCardProps extends ProductCardInterface {}

export function ProductCard({title, description, thumbnail }: ProductCardProps) {
  return (
    <div className="h-100 border-0 shadow shadow-hover card-cta">
      {thumbnail && (
        <ImageRenderer className="img-fit-cover card-img-top" image={thumbnail} />
      )}
      <div className="d-flex flex-column">
        <div className="mb-3">
          {title && <h4 className="card-title">{title}</h4>}
          {description && <p className="card-text">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
