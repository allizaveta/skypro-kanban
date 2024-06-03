import React, { useState } from "react";

export default function App() {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="App">
      <a onClick={toggleDropdown} className="header__user _hover02">
        Ivan Ivanov
      </a>
      {isOpen && (
        <ul
          className={"header__pop-user-set pop-user-set "}
          id="user-set-target"
        >
          <li className="pop-user-set__name">Ivan Ivanov</li>
          <li className="pop-user-set__mail">ivan.ivanov@gmail.com</li>
          <div className="pop-user-set__theme">
            <li>Темная тема</li>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </ul>
      )}
    </div>
  );
}
