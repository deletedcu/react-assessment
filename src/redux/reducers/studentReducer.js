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
    case studentTypes.GET_STUDENTS: {
      return { ...state, loading: false, students: payload };
    }
    case studentTypes.ADD_TAG: {
      const {id, tag} = payload;
      const newStudents = state.students.map(item => {
        if (item.id === id) {
          let newTags = [];
          if (item.tags) {
            newTags = item.tags;
            if (!item.tags.includes(tag)) {
              newTags.push(tag);
            }
          } else {
            newTags = [tag];
          }
          return { ...item, tags: newTags };
        } else {
          return item;
        }
      });
      return { ...state, students: newStudents };
    }
    case studentTypes.DELETE_TAG: {
      const {id, tag} = payload;
      const newStudents = state.students.map(item => {
        if (item.id === id) {
          const newTags = item.tags.filter(val => val !== tag);
          return { ...item, tags: newTags };
        } else {
          return item;
        }
      });
      return { ...state, students: newStudents };
    }
    default:
      return state;
  }
};

export default studentReducer;
