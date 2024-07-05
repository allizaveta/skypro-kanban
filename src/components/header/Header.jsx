import React, { useState } from "react";
import * as S from "./Header.styled";
import UserPop from "../popups/user/User";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";
import RoutesPath from "../../RoutesPath";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const handleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <Link to={RoutesPath.NEWCARD}>Создать новую задачу</Link>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={handleDropdown}>{user.name}</S.HeaderUser>
            {isOpen && <UserPop />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;
