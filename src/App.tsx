import React from "react";
import "./App.css";

import Router from "./routes/Router";

import { RouterProvider } from "react-router-dom";
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
