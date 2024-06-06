import { Link } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";

const ExitPopup = ({ logOut }) => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={logOut}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={RoutesPath.HOME}>Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
