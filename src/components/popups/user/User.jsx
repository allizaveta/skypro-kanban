import * as S from "./User.styled";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";

const UserPop = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderPopUser id={"pop-user"}>
      <S.PopUserName>Ivan Ivanov</S.PopUserName>
      <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
      <S.PopUserSetTheme>
        <S.PopUserTheme>Темная тема</S.PopUserTheme>
        <S.PopUserCheckbox
          type="checkbox"
          className="checkbox"
          name="checkbox"
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
