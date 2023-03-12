import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RecommendedMoviesPage } from "./components/pages/RecommendedMoviesPage/RecommendedMoviesPage";
import { RecommendedShowsPage } from "./components/pages/RecommendedShowsPage/RecommendedShowsPage";
import { MoviePage } from "./components/pages/MoviePage/MoviePage";
import { ShowPage } from "./components/pages/ShowPage/ShowPage";
import { Home } from "./components/pages/Home/Home";

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
    element: <RecommendedMoviesPage />,
  },
  {
    path: "/descubre-shows",
    element: <RecommendedShowsPage />,
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
