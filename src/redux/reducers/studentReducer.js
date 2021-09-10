import * as studentTypes from "../types/studentTypes";

const initialState = {
  loading: false,
  students: [],
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case studentTypes.LOADING:
      return { ...state, loading: payload };
    case studentTypes.GET_STUDENTS:
      return { ...state, loading: false, students: payload };
    default:
      return state;
  }
};

export default studentReducer;
