import Header from "../../components/header/Header";
import NewCardPopup from "../../components/popups/newCard/NewCard";
import Main from "../../components/main/Main";
import { cardList } from "../../data";
import { useEffect, useState } from "react";
import { Wrapper } from "../../Common.styled";
import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    const newCard = {
      _id: cards.length + 1,
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
      <Wrapper>
        <NewCardPopup addCard={addCard} />
        <Header />
        {isLoading ? <p>Загрузка</p> : <Main cards={cards} />}
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
