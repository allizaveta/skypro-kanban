import "./App.css";
import Header from "./components/header/Header";
import BrowsePopup from "./components/popups/browse/Browse";
import NewCardPopup from "./components/popups/newCard/NewCard";
import ExitPopup from "./components/popups/exit/Exit";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyled, Wrapper } from "./Global.styled";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "04.06.24",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <ExitPopup />
        <NewCardPopup addCard={addCard} />
        <BrowsePopup />
        <Header />
        {isLoading ? <p>Загрузка</p> : <Main cards={cards} />}
      </Wrapper>
    </>
  );
}

export default App;
