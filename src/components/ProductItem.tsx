import { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import lodash from 'lodash';

import { ProductWishlistProps } from './ProductWishlist';

const ProductWishlist = dynamic<ProductWishlistProps>(
  () => {
    return import('./ProductWishlist');
  },
  { loading: () => <span>Carregando...</span> }
);

interface Product {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent(props: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  const { product, onAddToWishlist } = props;

  console.log('ProductItemComponent');

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar na lista de desejos?
      </button>
      {isAddingToWishlist && (
        <ProductWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  // return Object.is(prevProps.product, nextProps.product);
  return lodash.isEqual(prevProps.product, nextProps.product);
});

export default ProductItem;
