import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ExitPage from "./pages/exitPage/ExitPage";
import NotfoundPage from "./pages/notFoundPage/NotFoundPage";
import ViewCardPage from "./pages/viewCardPage/ViewCardPage";
import { GlobalStyled } from "./Global.styled";
import RoutesPath from "./RoutesPath";
import PrivateRoute from "./components/PrivatRoute";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={RoutesPath.HOME} element={<MainPage />}>
            <Route
              path={RoutesPath.EXIT}
              element={<ExitPage isAuth={setAuth} />}
            />
            <Route
              path={`${RoutesPath.VIEW_CARD}/:id`}
              element={<ViewCardPage />}
            />
          </Route>
        </Route>
        <Route
          path={RoutesPath.LOGIN}
          element={<LoginPage login={setAuth} />}
        />
        <Route path={RoutesPath.REGISTER} element={<RegisterPage />} />
        <Route path={RoutesPath.NOT_FOUND} element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
