import React from "react";
import { Home } from "./components/Home";
import LeadersPage from "./pages/LeadersPage";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LoaderPage from "./pages/LoaderPage";

export const App = () => {
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
