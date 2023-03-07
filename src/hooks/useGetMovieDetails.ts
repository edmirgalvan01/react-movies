import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/movies.service";
import { DetailsOfMovieType } from "../types/Movies";

export const useGetMovieDetails = (id: string) => {
  const [movie, setMovie] = useState<DetailsOfMovieType>();
  const intId = parseInt(id);

  useEffect(() => {
    getMovieDetails(intId).then((data) => setMovie(data));
  }, []);

  return { movie };
};
