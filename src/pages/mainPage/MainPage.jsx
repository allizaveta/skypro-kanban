import Header from "../../components/header/Header";
import NewCardPopup from "../../components/popups/newCard/NewCard";
import Main from "../../components/main/Main";
import { useEffect, useState } from "react";
import { Wrapper } from "../../Common.styled";
import React from "react";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api";

const MainPage = ({ user }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
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
    const fetchData = async () => {
      try {
        const response = await getTasks(user.token);
        console.log("tasks:", response);
        setCards(response.tasks);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user.token]);

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
