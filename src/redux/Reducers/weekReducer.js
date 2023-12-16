// src/redux/reducers/weekReducer.js
import { weekActions } from "../actions";
const { CHECK_WEEK_COMPLETION } = weekActions;

const initialState = {
  isWeekCompleted: false,
};

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_WEEK_COMPLETION:
      return {
        ...state,
        isWeekCompleted: true,
      };
    default:
      return state;
  }
};

export default weekReducer;
