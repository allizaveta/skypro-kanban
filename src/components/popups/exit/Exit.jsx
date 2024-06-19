import { Link } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";
import * as S from "./Exit.styled";

const PopExit = () => {
  const logOut = () => {
    setAuth(false);
    navigate(RoutesPath.LOGIN);
  };
  return (
    <S.ExitHeader>
      <S.PopExitCnt>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.Button $primary>
                <Link onClick={logOut}> Да, выйти </Link>
              </S.Button>
              <S.Button>
                <Link to={RoutesPath.HOME}>Нет, остаться</Link>
              </S.Button>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitCnt>
    </S.ExitHeader>
  );
};

export default PopExit;
