import { combineReducers } from "redux";
import studentReducer from "./reducers/studentReducer";
import uiReducer from "./reducers/uiReducer";

const rootReducer = combineReducers({
  student: studentReducer,
  ui: uiReducer,
});

export default rootReducer;
