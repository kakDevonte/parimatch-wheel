import React from "react";
import { Home } from "./components/Home";
import LeadersPage from "./pages/LeadersPage";
import { Route, Routes } from "react-router-dom";
import LoaderPage from "./pages/LoaderPage";
import "./App.scss";
import { useWheelActions } from "./contexts/wheel-context";

export const App = () => {
  const { getUser } = useWheelActions();

  React.useEffect(() => {
    const telegram = window.Telegram.WebApp;
    telegram.ready();
    telegram.expand();
    try {
      getUser(telegram.initDataUnsafe.user.id);
    } catch (e) {}
  }, []);

  return (
    <div className="root">
      <Routes>
        <Route path={"/"} element={<LoaderPage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/info/:show"} element={<LeadersPage />} />
      </Routes>
    </div>
  );
};
