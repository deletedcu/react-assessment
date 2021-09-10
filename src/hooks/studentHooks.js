import { useSelector } from "react-redux";
import { setLoading, getStudents } from "../redux";
import { useDispatchWrap } from "./utilHooks";

export const useLoading = () => {
  const { loading } = useSelector(state => state.student);
  const setLoadingF = useDispatchWrap(setLoading);

  return {
    loading,
    setLoadingF,
  };
};

export const useStudents = () => {
  const { students } = useSelector(state => state.student);
  const getStudentsF = useDispatchWrap(getStudents);

  return {
    students,
    getStudentsF,
  };
};
