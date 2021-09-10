import * as uiTypes from "../types/uiTypes";

export const toggleTheme = () => {
  return dispatch => {
    dispatch({ type: uiTypes.TOGGLE_THEME });
  };
};
