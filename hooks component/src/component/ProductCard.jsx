import { useState, useLayoutEffect, useRef } from "react";

function ProductCard({ product }) {
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);

  // useLayoutEffect ensures that we measure the height before the paint
  useLayoutEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.getBoundingClientRect().height;
      setCardHeight(height);
    }
  }, [product]); // Re-run the effect if the product changes

  return (
    <div
      ref={cardRef}
      className="p-4 border rounded-lg mb-4 bg-white"
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease"
      }}
    >
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="mt-4">
        <p className="text-gray-500">Card Height: {cardHeight}px</p>
      </div>
    </div>
  );
}

function ProductCard2() {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 1200,
    description: "A high-performance laptop for developers."
  });

  const changeProduct = () => {
    setProduct({
      name: "Smartphone",
      price: 800,
      description: "A sleek and powerful smartphone."
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <button
        onClick={changeProduct}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-6"
      >
        Change Product
      </button>
      <ProductCard product={product} />
    </div>
  );
}

export default ProductCard2;
