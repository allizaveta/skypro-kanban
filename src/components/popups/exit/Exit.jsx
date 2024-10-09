import { Link, useNavigate } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";
import * as S from "./Exit.styled";
import { useUser } from "../../hooks/useUser";

const PopExit = () => {
  const { logoutUser } = useUser();
  const navigate = useNavigate();

  const logOut = () => {
    logoutUser();
    navigate(RoutesPath.LOGIN);
  };

  return (
    <S.ExitHeader>
      <S.PopExitCnt>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.Button $primary type="button" onClick={logOut}>
                {" "}
                Да, выйти{" "}
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
