// Initial State
const initialState = {
  product_list: [],
};

// Reducer Function
const product_list_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "productList/storeproduct":
      return {
        ...state,
        product_list: action.payload,
      };
    default:
      return state;
  }
};

// dispatcher functions
export function storeProduct(data) {
  return { type: "productList/storeproduct", payload: data };
}

export default product_list_reducer;
