import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header className="z-50 font-Vazirmatn" />
    <Main />
  </React.StrictMode>
);
