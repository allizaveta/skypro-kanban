import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";

export const useTasks = () => {
  return useContext(TasksContext);
};
