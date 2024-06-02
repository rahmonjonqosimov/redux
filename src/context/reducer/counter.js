import { INC } from "../action/action";

const initialState = 0;

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return (state = state + 1);
    default:
      return state;
  }
};
