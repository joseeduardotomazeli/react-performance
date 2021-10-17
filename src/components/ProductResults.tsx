import { useMemo } from 'react';

import ProductItem from './ProductItem';

interface Product {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}

interface ProductResultsProps {
  results: Product[];
  onAddToWishlist: (id: number) => void;
}

function ProductResults(props: ProductResultsProps) {
  const { results, onAddToWishlist } = props;

  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}

export default ProductResults;
