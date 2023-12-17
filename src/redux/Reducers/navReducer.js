// src/redux/reducers/navReducer.js

import { navActions } from "../actions";
const { SET_ADD_BUTTON_VISIBILITY } = navActions;

// Initial state for the navReducer
const initialState = {
  showAddButton: true,
};

// Nav reducer function
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_BUTTON_VISIBILITY:
      return {
        ...state,
        showAddButton: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
