const initialCart = {
  cart: [],
};
const reducer = (state = initialCart, action) => {
  switch (action.type) {
    case "cart/addpProduct":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
