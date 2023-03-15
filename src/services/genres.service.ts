import { API_KEY, API_URL } from "../../consts";
import { ResponseOfGenres } from "../types/Genres";
import { ResponseOfMovies } from "../types/Movies";

export const getGenreList = async (): Promise<ResponseOfGenres> => {
  const response = await fetch(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMoviesByGenre = async (
  genreId: number
): Promise<ResponseOfMovies> => {
  const response = await fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  const data = await response.json();
  return data;
};
