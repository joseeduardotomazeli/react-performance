interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

function ProductItem(props: ProductItemProps) {
  const { product } = props;

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export default ProductItem;
