import RoutesPath from "../RoutesPath";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";

function PrivateRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to={RoutesPath.LOGIN} />;
}

export default PrivateRoute;
