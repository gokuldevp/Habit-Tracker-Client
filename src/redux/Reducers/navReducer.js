import { navActions } from "../actions";
const { SET_ADD_BUTTON_VISIBILITY } = navActions;

const initialState = {
  showAddButton: true,
};

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
