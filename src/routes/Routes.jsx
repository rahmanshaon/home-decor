import { createBrowserRouter } from "react-router";
import App from "../App";

// named export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);