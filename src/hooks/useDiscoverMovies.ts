import { useEffect, useState } from "react";
import { discoverMovies } from "../services/movies.service";
import { ResponseOfMovies } from "../types/Movies";

export const useDiscoverMovies = () => {
  const [movies, setMovies] = useState<ResponseOfMovies>();

  useEffect(() => {
    discoverMovies().then((data) => setMovies(data));
  }, []);

  return { movies };
};
