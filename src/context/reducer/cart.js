import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_CART,
  DEC_CART,
} from "../action/action";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (state, action) => {
  let index = state.findIndex((i) => i.id === action.payload.id);
  let result = state;
  if (index < 0) {
    result = [...result, { ...action.payload, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};
const removeFromCart = (state, action) => {
  let result = state.filter((i) => i.id !== action.payload.id);
  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};
const incCart = (state, action) => {
  let result = state;
  let index = result.findIndex((i) => i.id === action.payload.id);
  result = result.map((item, inx) =>
    inx === index ? { ...item, quantity: item.quantity + 1 } : item
  );
  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};
const decCart = (state, action) => {
  let result = state;
  let index = result.findIndex((i) => i.id === action.payload.id);
  result = result.map((item, inx) =>
    inx === index ? { ...item, quantity: item.quantity - 1 } : item
  );
  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case INC_CART:
      return incCart(state, action);
    case DEC_CART:
      return decCart(state, action);
    default:
      return state;
  }
};
