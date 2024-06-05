import React, { useState } from "react";
import * as S from "./Header.styled";

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
            {isOpen && (
              <div
                className={"header__pop-user-set pop-user-set "}
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;
