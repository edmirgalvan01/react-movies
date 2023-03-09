import { API_KEY, API_URL } from "../../consts";
import { ResponseOfGenres } from "../types/Genres";

export const getGenreList = async (): Promise<ResponseOfGenres> => {
  const response = await fetch(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
