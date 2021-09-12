import * as uiTypes from "../types/uiTypes";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
}

const uiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case uiTypes.TOGGLE_THEME:
      // eslint-disable-next-line no-case-declarations
      const theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", theme);
      return { ...state, theme };
    default:
      return state;
  }
};

export default uiReducer;
