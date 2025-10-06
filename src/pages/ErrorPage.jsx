import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
};

export default ErrorPage;
