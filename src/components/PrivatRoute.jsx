import RoutesPath from "../RoutesPath";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={RoutesPath.LOGIN} />;
}

export default PrivateRoute;
