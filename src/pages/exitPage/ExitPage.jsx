import ExitPopup from "../../components/popups/exit/Exit";
/* import { useNavigate } from "react-router-dom";
import RoutesPath from "../../RoutesPath"; */

/* export default function ExitPage({ isAuth }) {
  const navigate = useNavigate();
  const auth = () => {
    isAuth(false);
    navigate(RoutesPath.HOME);
  };
  return <ExitPopup logOut={auth} />;
} */

export default function ExitPage({ isAuth }) {
  function logOut() {
    isAuth(false);
  }

  return <ExitPopup logOut={logOut} />;
}
