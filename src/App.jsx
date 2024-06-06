import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import { ExitPage } from "./pages/exitPage/ExitPage";
import NotfoundPage from "./pages/notFoundPage/NotFoundPage";
import ViewCardPage from "./pages/viewCardPage/ViewCardPage";
import { GlobalStyled } from "./Global.styled";

function App() {
  const AppRoutes = {
    HOME: "/",
    EXIT: "/exit",
    VIEW_CARD: "/card/:id",
    LOGIN: "/login",
    REGISTER: "/register",
    NOT_FOUND: "*",
  };

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        <Route path={AppRoutes.VIEW_CARD} element={<ViewCardPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
