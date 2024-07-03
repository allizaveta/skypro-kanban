import RoutesPath from "../RoutesPath";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";

function PrivateRoute() {
  const { isLoginUser } = useUser();
  return isLoginUser ? <Outlet /> : <Navigate to={RoutesPath.LOGIN} />;
}

export default PrivateRoute;
