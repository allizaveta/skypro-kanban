import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../RoutesPath";

export const UserContext = createContext(null);

const getUserFormLS = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();

  const [isLoggedInUser, setIsLoggedInUser] = useState(getUserFormLS);

  const loginUser = (user) => {
    setIsLoggedInUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate(RoutesPath.HOME);
  };
  const logoutUser = () => {
    setIsLoggedInUser(null);
    localStorage.removeItem("user");
    navigate(RoutesPath.LOGIN);
  };
  return (
    <UserContext.Provider value={{ isLoggedInUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
