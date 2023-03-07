import { API_KEY, API_URL } from "../../consts";
import { ResponseOfMovies } from "../types/Movies";

export const discoverMovies = async (): Promise<ResponseOfMovies> => {
  const data = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};
