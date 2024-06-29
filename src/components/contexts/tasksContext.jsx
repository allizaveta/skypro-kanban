import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../RoutesPath";

export const TasksContext = createContext(null);
export const TasksProvider = ({ children }) => {
  let navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const getTasks = (cards) => {
    setTasks(cards);
    navigate(RoutesPath.HOME);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
