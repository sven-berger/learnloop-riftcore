import "./style/global.css";
import "./i18n.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Index from "./index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>,
);
