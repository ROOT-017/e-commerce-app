import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/layout/Rootlayout";
import Home from "../pages/Home";

//createBrowserRouter is a function that returns a BrowserRouter component with tpescript types
const Router = createBrowserRouter([
  {
    //BrowserRouter component props
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About Page</h1>,
      },
      {
        path: "/product",
        element: <h1>Product Page</h1>,
      },
    ],
  },
]);

export default Router;
