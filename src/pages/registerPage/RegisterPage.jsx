import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "../loginPage/LoginPage.styled.js";
import RoutesPath from "../../RoutesPath.jsx";
import { Wrapper } from "../../Common.styled.js";
import { signup } from "../../api.js";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegister = async (event) => {
    event.preventDefault();
    if (!formValues.name) {
      setError("Введите имя");
      return;
    }
    if (!formValues.email) {
      setError("Введите почту");
      return;
    }
    if (!formValues.password) {
      setError("Введите пароль");
      return;
    }
    try {
      const response = await signup({
        name: formValues.name,
        login: formValues.email,
        password: formValues.password,
      });
      console.log("signup response", response);

      navigate(RoutesPath.LOGIN);
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
            <S.BlockTtl>Регистрация</S.BlockTtl>
            <S.BlockInputForm id="formLogIn" onSubmit={onRegister}>
              <S.BlockInput
                type="text"
                value={formValues.name}
                onChange={onInputChange}
                name="name"
                id="first-name"
                placeholder="Имя"
              />
              <S.BlockInput
                type="email"
                value={formValues.email}
                onChange={onInputChange}
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.BlockInput
                type="password"
                value={formValues.password}
                onChange={onInputChange}
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.BlockBtnEnter id="btnEnter" type="submit">
                Зарегестрироваться
              </S.BlockBtnEnter>
              {error && <S.BlockError>{error}</S.BlockError>}
            </S.BlockInputForm>
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
