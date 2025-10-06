import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { BrowserRouter, Route, Routes } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

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
