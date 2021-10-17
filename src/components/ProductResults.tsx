import { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

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

  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          key={key}
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        width={900}
        height={300}
        rowHeight={25}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
    </div>
  );
}

export default ProductResults;
