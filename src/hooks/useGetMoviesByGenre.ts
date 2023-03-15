import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../services/genres.service";
import { ResponseOfMovies } from "../types/Movies";

export const useGetMoviesByGenre = (categoryId: string) => {
  const [movies, setMovies] = useState<ResponseOfMovies>();
  const intId = parseInt(categoryId);

  useEffect(() => {
    getMoviesByGenre(intId).then((data) => setMovies(data));
  }, []);

  return { movies };
};
