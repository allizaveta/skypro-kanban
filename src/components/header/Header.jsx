import React, { useState } from "react";
import * as S from "./Header.styled";
import UserPop from "../popups/user/User";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={handleDropdown}>Ivan Ivanov</S.HeaderUser>
            {isOpen && <UserPop />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;
