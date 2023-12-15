// src/redux/actions/navActions.js
export const SET_ADD_BUTTON_VISIBILITY = 'SET_ADD_BUTTON_VISIBILITY';

export const setAddButtonVisibility = (isVisible) => {
    return {
    type: SET_ADD_BUTTON_VISIBILITY,
    payload: isVisible,
    }
}
  