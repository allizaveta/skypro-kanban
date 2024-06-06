import { Link } from "react-router-dom";
import * as S from "./LoginPage.styled.js";
import RoutesPath from "../../RoutesPath.jsx";
import { Wrapper } from "../../Common.styled.js";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const auth = () => {
    login(true);
    navigate(RoutesPath.HOME);
  };
  return (
    <Wrapper>
      <S.Background>
        <S.Container>
          <S.Block>
            <S.BlockTtl>Вход</S.BlockTtl>
            <S.BlockInputForm id="formLogIn" action="#">
              <S.BlockInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.BlockInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </S.BlockInputForm>
            <S.BlockBtnEnter id="btnEnter" onClick={auth}>
              Войти
            </S.BlockBtnEnter>
            <S.BlockFormGroup>
              Нужно зарегистрироваться?
              <S.BlockFormGroupLink>
                <Link to={RoutesPath.REGISTER}>Регистрируйтесь здесь</Link>
              </S.BlockFormGroupLink>
            </S.BlockFormGroup>
          </S.Block>
        </S.Container>
      </S.Background>
    </Wrapper>
  );
};

export default LoginPage;
