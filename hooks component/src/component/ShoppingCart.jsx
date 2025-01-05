import { useState } from "react";

function ShoppingCart() {
  // Declare a state variable called 'cartCount' and set its initial value to 0
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding an item
  const addItemToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Function to handle removing an item
  const removeItemFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <p className="text-xl mb-4">
        Items in Cart: <span className="font-semibold">{cartCount}</span>
      </p>
      <div className="flex gap-4">
        <button
          onClick={addItemToCart}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Add Item
        </button>
        <button
          onClick={removeItemFromCart}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
