import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/pages/Home/Home";
import { ShowPage } from "./components/pages/ShowPage/ShowPage";
import { MoviePage } from "./components/pages/MoviePage/MoviePage";

import "./index.css";

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
    path: "/peliculas-recomendadas",
    element: <h1>Peliculas recomendadas</h1>,
  },
  {
    path: "/descubre-shows",
    element: <h1>Descubre nuevos shows</h1>,
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
