import { useState, useEffect } from "react";
import { getGenreList } from "../services/genres.service";
import { ResponseOfGenres } from "../types/Genres";

export const useGetGenreList = () => {
  const [genres, setGenres] = useState<ResponseOfGenres>();

  useEffect(() => {
    getGenreList().then((genres) => setGenres(genres));
  }, []);

  return { genres };
};
