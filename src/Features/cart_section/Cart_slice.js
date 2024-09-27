// Initial State
const initialCart = {
  cart: [],
};

// Reducer Function
const cart_reducer = (state = initialCart, action) => {
  switch (action.type) {
    // add product
    case "cart/addProduct":
      return { ...state, cart: [...state.cart, action.payload] };

    // remove product
    case "cart/removeProduct":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    // clear Cart
    case "cart/clearCart":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

// Action Creators

// function that adds the data to the state
export const addproduct = (data) => {
  return { type: "cart/addProduct", payload: data };
};

// function that remove product from cart
export const removeProduct = (product) => {
  return { type: "cart/removeProduct", payload: product };
};

// function to clear the cart
export const clearCart = () => {
  return { type: "cart/clearCart" };
};

export default cart_reducer;
