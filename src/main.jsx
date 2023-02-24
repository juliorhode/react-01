import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifApp";

// importacion de estilos
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);
