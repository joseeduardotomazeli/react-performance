import { memo } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent(props: ProductItemProps) {
  console.log('ProductItemComponent');

  const { product, onAddToWishlist } = props;

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>
        Add to wishlist
      </button>
    </div>
  );
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export default ProductItem;
