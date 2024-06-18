import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoutesPath from "../../RoutesPath.jsx";
import { Wrapper } from "../../Common.styled.js";
import * as S from "./LoginPage.styled.js";
import { login } from "../../api.js";

const LoginPage = ({ setAuth, setUser }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegister = async (event) => {
    event.preventDefault();
    if (!formValues.email) {
      setError("Введите почту");
      return;
    }
    if (!formValues.password) {
      setError("Введите пароль");
      return;
    }
    try {
      const response = await login({
        login: formValues.email,
        password: formValues.password,
      });
      console.log("Login response", response);

      setAuth(true);
      setUser(response.user);
      navigate(RoutesPath.HOME);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка сети");
        return;
      }
      setError(error.message);
    }
  };
  return (
    <Wrapper>
      <S.Background>
        <S.Container>
          <S.Block>
            <S.BlockTtl>Вход</S.BlockTtl>
            <S.BlockInputForm id="formLogIn" onSubmit={onRegister}>
              <S.BlockInput
                type="email"
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
                value={formValues.email}
                onChange={onInputChange}
              />
              <S.BlockInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
              {error && <S.BlockError>{error}</S.BlockError>}
              <S.BlockBtnEnter id="btnEnter" type="submit">
                Войти
              </S.BlockBtnEnter>
            </S.BlockInputForm>
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
