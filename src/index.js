import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { App } from "./App";
import { WheelContextProvider } from "./contexts/wheel-context";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

bridge.send("VKWebAppInit");

ReactDOM.render(
  <WheelContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WheelContextProvider>,
  document.getElementById("root")
);
