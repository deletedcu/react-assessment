import { useSelector } from "react-redux";
import { toggleTheme } from "../redux";
import { useDispatchWrap } from "./utilHooks";

export const useTheme = () => {
  const theme = useSelector(state => state.ui.theme);
  const toggleThemeF = useDispatchWrap(toggleTheme);

  return { theme, toggleThemeF };
};
