import { useReducer } from "react";

// Initial state of the cart
const initialState = {
  items: [],
  total: 0
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter(
        (_, index) => index !== action.payload.index
      );
      const itemToRemove = state.items[action.payload.index];
      return {
        ...state,
        items: filteredItems,
        total: state.total - itemToRemove.price
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

function SShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Example items to add to the cart
  const sampleItems = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 }
  ];

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="mb-4">
        {sampleItems.map((item, index) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cart Items:</h2>
        {cart.items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: { index } })
                }
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <h2 className="text-lg font-bold">Total: ${cart.total}</h2>
      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        className="mt-4 px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default SShoppingCart;
