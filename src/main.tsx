import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ShowPage } from "./components/pages/ShowPage/ShowPage";
import { MoviePage } from "./components/pages/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
  {
    path: "/show/:id",
    element: <ShowPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
