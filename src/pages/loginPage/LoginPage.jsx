import { useState } from "react";
import { Link } from "react-router-dom";
import RoutesPath from "../../RoutesPath.jsx";
import { Wrapper } from "../../Common.styled.js";
import * as S from "./LoginPage.styled.js";
import { login } from "../../api.js";
import { useUser } from "../../components/hooks/useUser";

const LoginPage = () => {
  const { isLoginUser } = useUser();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });
  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const onRegister = async (event) => {
    event.preventDefault();
    let errors = {};
    if (!formValues.email) {
      errors.email = true;
      setError("Введите почту");
    }
    if (!formValues.password) {
      errors.password = true;
      setError("Введите пароль");
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    try {
      const response = await login({
        login: formValues.email,
        password: formValues.password,
      });
      console.log("Login response", response);
      isLoginUser(response.user);
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
                type="text"
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
                value={formValues.email}
                onChange={onInputChange}
                $error={fieldErrors.email}
              />
              <S.BlockInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
                $error={fieldErrors.password}
              />
              {error && <S.BlockError>{error}</S.BlockError>}
              <S.BlockBtnEnter
                id="btnEnter"
                type="submit"
                disabled={fieldErrors.email || fieldErrors.password}
              >
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
