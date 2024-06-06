import ExitPopup from "../../components/popups/exit/Exit";

export default function ExitPage({ isAuth }) {
  function logOut() {
    isAuth(false);
  }

  return <ExitPopup logOut={logOut} />;
}
