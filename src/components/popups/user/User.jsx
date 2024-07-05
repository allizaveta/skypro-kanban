import * as S from "./User.styled";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";

const UserPop = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <S.HeaderPopUser id={"pop-user"}>
      <S.PopUserName>{user.name}</S.PopUserName>
      <S.PopUserMail>{user.login}</S.PopUserMail>
      <S.PopUserSetTheme>
        <S.PopUserTheme>Темная тема</S.PopUserTheme>
        <S.PopUserCheckbox
          type="checkbox"
          className="checkbox"
          name="checkbox"
          checked={darkTheme}
          onChange={toggleTheme}
        />
      </S.PopUserSetTheme>
      <S.PopUserButton onClick={() => navigate(RoutesPath.EXIT)}>
        {" "}
        Выйти{" "}
      </S.PopUserButton>
    </S.HeaderPopUser>
  );
};

export default UserPop;
