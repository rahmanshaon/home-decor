import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
// import { router } from "./routes/Routes.jsx";
// import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Declarative Mode */}

    {/* <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<App />} />
      </Routes>
    </BrowserRouter> */}

    {/* Data Mode */}

    <RouterProvider router={router} />
  </StrictMode>
);
