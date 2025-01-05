import { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 }
];

function ProductFilter() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.price >= minPrice
    );
  }, [search, minPrice]); // Recompute only when 'search' or 'minPrice' changes

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Product Filter</h1>
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-full mb-2 text-black"
        />
        <input
          type="number"
          placeholder="Minimum price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="border rounded px-4 py-2 w-full  text-black"
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="mb-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
