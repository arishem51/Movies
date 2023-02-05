import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import QueryContext from "./Context/QueryContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryContext>
        <App />
      </QueryContext>
    </BrowserRouter>
  </React.StrictMode>
);
