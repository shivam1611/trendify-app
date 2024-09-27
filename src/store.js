import { combineReducers, createStore } from "redux";
import product_list_reducer from "./Features/Product_slice/product_list";
import cart_reducer from "./Features/cart_section/Cart_slice";

const rootReducer = combineReducers({
  product_list: product_list_reducer,
  cart_reducer: cart_reducer,
});

const store = createStore(rootReducer);

export default store;
