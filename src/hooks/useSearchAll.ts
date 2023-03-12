import { useEffect, useState } from "react";
import { searchAll } from "../services/movies.service";
import { SearchResponseType } from "../types/Movies";

export const useSearchAll = (query: string) => {
  const [response, setResponse] = useState<SearchResponseType>();

  useEffect(() => {
    searchAll(query).then((data) => setResponse(data));
  }, []);

  return { response };
};
