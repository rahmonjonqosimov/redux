import { legacy_createStore, combineReducers } from "redux";
import { counter } from "./reducer/counter";
import { heart } from "./reducer/heart";
import { cart } from "./reducer/cart";

const reducer = combineReducers({
  counter,
  heart,
  cart,
});

export const store = legacy_createStore(reducer);
