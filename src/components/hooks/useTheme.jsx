import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export const useTasks = () => {
  return useContext(ThemeContext);
};
