import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        // element: <Home />,
        Component: Home,
        loader: () => fetch("/furnitureData.json"),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

export default router;
