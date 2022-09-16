import React from "react";
import { Home } from "./components/Home";
import "./App.css";
import RulesPage from "./pages/RulesPage";
import LeadersPage from "./pages/LeadersPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="root">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/rules"} element={<RulesPage />} />
        <Route path={"/leaders"} element={<LeadersPage />} />
      </Routes>
    </div>
  );
};
