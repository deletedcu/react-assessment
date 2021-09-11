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

export const addTag = ({id, tag}) => {
  return dispatch => {
    dispatch({ type: studentTypes.ADD_TAG, payload: {id, tag}});
  };
};

export const deleteTag = ({id, tag}) => {
  return dispatch => {
    dispatch({ type: studentTypes.DELETE_TAG, payload: {id, tag}});
  };
};
