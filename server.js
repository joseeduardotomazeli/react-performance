function generateRandomData() {
  const data = {
    products: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      title: `Camiseta ${i + 1}`,
      price: 80,
    });
  }

  return data;
}

module.exports = generateRandomData;
