import { ContentFeaturedProductsInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import ProductCard from '../product/product-card';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentFeaturedProductsProps extends ContentFeaturedProductsInterface { }

export function ContentFeaturedProducts(props: ContentFeaturedProductsProps) {
  return (
    <Section {...props.section}>
      <div className="container" {...(props._editable ? {...storyblokEditable(props as any)} : {})}>
        {props.text && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
          </div>
        )}
        <div className="row">
          {props.products.map((product, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentFeaturedProducts;
