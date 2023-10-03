import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UIElementsVisibilityContextProvider from "./context/UIElementsVisibilityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIElementsVisibilityContextProvider>
        <App />
      </UIElementsVisibilityContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
