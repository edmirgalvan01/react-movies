import { useEffect, useState } from "react";
import { searchMovies } from "../services/movies.service";
import { ResponseOfMovies } from "../types/Movies";

export const useSearchMovies = () => {
  const [response, setResponse] = useState<ResponseOfMovies>();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    searchMovies(query).then((data) => setResponse(data));
  }, [query]);

  return { response, setQuery };
};
