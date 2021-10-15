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

  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductResults;
