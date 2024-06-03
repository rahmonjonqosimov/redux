import { TOGGLE_HEART } from "../action/action";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

const toggleWishes = (state, action) => {
  let index = state.findIndex((i) => i.id === action.payload.id);
  let result = state;
  if (index < 0) {
    result = [...state, action.payload];
  } else {
    result = state.filter((i) => i.id !== action.payload.id);
  }
  localStorage.setItem("wishlist", JSON.stringify(result));
  return result;
};

export const heart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEART:
      return toggleWishes(state, action);
    default:
      return state;
  }
};
