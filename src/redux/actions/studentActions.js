import axios from "axios";
import * as studentTypes from "../types/studentTypes";
import { BASE_URL } from "../../config/constants";

export const setLoading = data => {
  return dispatch => {
    dispatch({ type: studentTypes.LOADING, payload: data });
  };
};

export const getStudents = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}/students`);
      if (res?.status === 200) {
        console.log(res.data.students);
        dispatch({
          type: studentTypes.GET_STUDENTS, 
          payload: res.data.students,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
};
