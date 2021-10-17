export interface ProductWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

function ProductWishlist(props: ProductWishlistProps) {
  const { onAddToWishlist, onRequestClose } = props;

  return (
    <span>
      Confirmar ação?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}

export default ProductWishlist;
