import "./App.css";
import Header from "./components/header/Header";
import BrowsePopup from "./components/popups/browse/Browse";
import NewCardPopup from "./components/popups/newCard/NewCard";
import ExitPopup from "./components/popups/exit/Exit";
import Main from "./components/main/Main";
import { useState } from "react";
import { cardList } from "./data";
function App() {
  const [cards, setCards] = useState(cardList);
  return (
    <div className="wrapper">
      <ExitPopup />
      <NewCardPopup />
      <BrowsePopup />
      <Header />
      <Main cards={cards} />
    </div>
  );
}

export default App;
