import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  const message = error?.statusText || error?.message;
  const status = error?.status;
  return (
    <div>
      <Navbar />
      {/* <p className="text-xl text-red-600">{error.message}</p> */}
      <h1 className="text-7xl font-extrabold text-gray-800 mb-4">{status}</h1>
      <p className="text-2xl font-semibold text-red-600 mb-2">{message}</p>
      <Footer />
    </div>
  );
};

export default ErrorPage;
