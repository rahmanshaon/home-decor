import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* declarative mode */}
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
