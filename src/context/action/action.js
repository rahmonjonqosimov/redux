export const INC = "INC";
export const TOGGLE_HEART = "TOGGLE_HEART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INC_CART = "INC_CART";
export const DEC_CART = "DEC_CART";

export const incCounter = () => {
  return {
    type: INC,
  };
};
export const toggleHeart = (payload) => {
  return {
    type: TOGGLE_HEART,
    payload,
  };
};
export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
export const incrementCart = (payload) => {
  return {
    type: INC_CART,
    payload,
  };
};
export const decrementCart = (payload) => {
  return {
    type: DEC_CART,
    payload,
  };
};
