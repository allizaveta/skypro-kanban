import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../RoutesPath";

export const UserContext = createContext(null);

const getUserFromLS = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUserFromLS);

  const isLoginUser = (newUser) => {
    setUser(newUser);
    navigate(RoutesPath.HOME);
  };

  const logoutUser = () => {
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, isLoginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
