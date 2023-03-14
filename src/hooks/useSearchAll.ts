import { useEffect, useState } from "react";
import { searchMovies } from "../services/movies.service";
import { SearchResponseType } from "../types/Movies";

export const useSearchAll = () => {
  const [response, setResponse] = useState<SearchResponseType>();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    searchMovies(query).then((data) => setResponse(data));
  }, []);

  return { response, setQuery };
};
