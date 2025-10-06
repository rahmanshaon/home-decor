import { createBrowserRouter } from "react-router";
import App from "../App";

// named export
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
