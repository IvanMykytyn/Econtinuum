import React from "react";

import "./error-page.styles.scss";
import { FaGhost } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="content-error-page">
      <h1>
        4
        <span>
          <FaGhost />
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </div>
  );
};

export default ErrorPage;
