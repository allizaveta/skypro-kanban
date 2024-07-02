import { useEffect, useState } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./MainPage.styled";
import { Wrapper } from "../../Common.styled";
import RoutesPath from "../../RoutesPath";
import { useTasks } from "../../components/hooks/useTaskContext";
import { useUser } from "../../components/hooks/useUserContext";
import Header from "../../components/header/Header";
import NewCardPopup from "../../components/popups/newCard/NewCard";
import Main from "../../components/main/Main";

const MainPage = () => {
  const { tasks, setTasks, getTasks } = useTasks();
  const { isLoggedInUser } = useUser();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTasks(isLoggedInUser.token);
        console.log("tasks:", response);
        setTasks(response.tasks);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Ошибка загрузки задач");
      }
    };
    fetchData();
  }, [isLoggedInUser.token, setTasks, getTasks]);

  return (
    <>
      <Wrapper>
        <NewCardPopup to={RoutesPath.NEWCARD} />
        <Header />
        {error && <S.Text>{error}</S.Text>}
        {!error && isLoading ? <S.Text>Загрузка</S.Text> : <Main />}
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
