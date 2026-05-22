import "./index.css";
import App from "./App.tsx";
import React from "react";
import { CartProvider } from "./context/CartContext.tsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);
