import { memo } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

function ProductItemComponent(props: ProductItemProps) {
  console.log('ProductItemComponent');

  const { product } = props;

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export default ProductItem;
