import { useState, FormEvent, useCallback } from 'react';

import ProductResultsProps from '../components/ProductResults';

function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products = data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    // const totalPrice = useMemo(() => {
    //   return results.reduce((acc, product) => {
    //     return acc + product.price;
    //   }, 0);
    // }, [results]);

    setResults(products);
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <>
      <h1>React Performance</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <ProductResultsProps results={results} onAddToWishlist={addToWishlist} />
    </>
  );
}

export default Home;
