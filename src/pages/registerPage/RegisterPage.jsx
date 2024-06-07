import { Link } from "react-router-dom";
import * as S from "../loginPage/LoginPage.styled.js";
import RoutesPath from "../../RoutesPath.jsx";
import { Wrapper } from "../../Common.styled.js";
const RegisterPage = () => {
  return (
    <Wrapper>
      <S.Background>
        <S.Container>
          <S.Block>
            <S.BlockTtl>Регистрация</S.BlockTtl>
            <S.BlockInputForm id="formLogIn" action="#">
              <S.BlockInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
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
            <Link to={RoutesPath.LOGIN}>
              <S.BlockBtnEnter id="btnEnter">
                Зарегестрироваться
              </S.BlockBtnEnter>
            </Link>
            <S.InlineFormGroup>
              Уже есть аккаунт?
              <S.InlineFormLink>
                <Link to={RoutesPath.LOGIN}>Войдите здесь</Link>
              </S.InlineFormLink>
            </S.InlineFormGroup>
          </S.Block>
        </S.Container>
      </S.Background>
    </Wrapper>
  );
};

export default RegisterPage;
