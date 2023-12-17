// src/redux/actions/navActions.js

// Action type for setting the visibility of the add button
export const SET_ADD_BUTTON_VISIBILITY = 'SET_ADD_BUTTON_VISIBILITY';

/**
 * Action creator to set the visibility of the add button.
 * @param {boolean} isVisible - Indicates whether the add button should be visible.
 * @returns {object} - Action object with type and payload.
 */
export const setAddButtonVisibility = (isVisible) => {
  return {
    type: SET_ADD_BUTTON_VISIBILITY,
    payload: isVisible,
  };
};
