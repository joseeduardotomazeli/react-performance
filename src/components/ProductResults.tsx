import { useMemo } from 'react';

import ProductItem from './ProductItem';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResultsProps {
  results: Product[];
}

function ProductResults(props: ProductResultsProps) {
  const { results } = props;

  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductResults;
