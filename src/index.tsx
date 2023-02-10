import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FurnitureCatalog from "./FurnitureCatalog";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <FurnitureCatalog />
  </React.Fragment>
);
