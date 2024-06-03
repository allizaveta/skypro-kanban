import React, { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        className="header__user _hover02"
        onClick={() => setOpen(!isOpen)}
      >
        Ivan Ivanov
      </button>
      ;
      <nav
        className={`${
          isOpen
            ? "pop-user-set:target pop-user-set "
            : "header__pop-user-set pop-user-set "
        }`}
        id="user-set-target"
      >
        <ul>
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
      </nav>
    </div>
  );
}

export default App;
/* .pop-user-set:target */

/* "header__pop-user-set pop-user-set" */
