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
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
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
    if (!formValues.name) {
      errors.name = true;
      setError("Введите имя");
    }
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
            <S.BlockInputForm id="formRegister" onSubmit={onRegister}>
              <S.BlockInput
                type="text"
                value={formValues.name}
                onChange={onInputChange}
                name="name"
                id="first-name"
                placeholder="Имя"
                $error={fieldErrors.name}
              />
              <S.BlockInput
                type="email"
                value={formValues.email}
                onChange={onInputChange}
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
                $error={fieldErrors.email}
              />
              <S.BlockInput
                type="password"
                value={formValues.password}
                onChange={onInputChange}
                name="password"
                id="formpassword"
                placeholder="Пароль"
                $error={fieldErrors.password}
              />
              <S.BlockBtnEnter
                id="btnEnter"
                type="submit"
                disabled={
                  fieldErrors.name || fieldErrors.email || fieldErrors.password
                }
              >
                Зарегистрироваться
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
