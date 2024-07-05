import Header from "../../components/header/Header";
import NewCardPopup from "../../components/popups/newCard/NewCard";
import Main from "../../components/main/Main";
import { useEffect, useState } from "react";
import { Wrapper } from "../../Common.styled";
import React from "react";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api";
import * as S from "./MainPage.styled";
import { useUser } from "../../components/hooks/useUser";
import { useTasks } from "../../components/hooks/useTasks";

const MainPage = () => {
  const { user } = useUser();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { tasks, setTasks } = useTasks([]);
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
  }, [user.token]);

  return (
    <>
      <Wrapper>
        <Header />
        {error && <S.Text>{error}</S.Text>}
        {!error && isLoading ? <S.Text>Загрузка</S.Text> : <Main />}
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
