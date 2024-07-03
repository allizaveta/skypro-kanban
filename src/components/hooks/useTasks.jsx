import { useContext } from "react";
import { TasksContext } from "../context/tasks";

export const useTasks = () => {
  return useContext(TasksContext);
};
