import Header from "../../components/header/Header";
import NewCardPopup from "../../components/popups/newCard/NewCard";
import Main from "../../components/main/Main";
import { useEffect, useState } from "react";
import { Wrapper } from "../../Common.styled";
import React from "react";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api";
import * as S from "./MainPage.styled";
import { useTasks } from "../../components/hooks/useTaskContext";

const MainPage = ({ user, setUser }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTasks(user.token);
        console.log("tasks:", response);
        setTasks(response.tasks);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Ошибка загрузки задач");
      }
    };
    fetchData();
  }, [user.token, setTasks]);

  const addCard = () => {
    const newCard = {
      _id: tasks.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "04.06.24",
      status: "Без статуса",
    };
    setTasks([...tasks, newCard]);
  };

  return (
    <>
      <Wrapper>
        <NewCardPopup addCard={addCard} />
        <Header setUser={setUser} />
        {error && <S.Text>{error}</S.Text>}
        {!error && isLoading ? (
          <S.Text>Загрузка</S.Text>
        ) : (
          <Main cards={tasks} />
        )}
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
