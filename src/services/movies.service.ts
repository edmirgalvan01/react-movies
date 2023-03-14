import type {
  DetailsOfMovieType,
  ResponseOfMovies,
  SearchResponseType,
} from "../types/Movies";
import { API_KEY, API_URL } from "../../consts";

export const discoverMovies = async (): Promise<ResponseOfMovies> => {
  const data = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const getMovieDetails = async (
  id: number
): Promise<DetailsOfMovieType> => {
  const data = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const getPopularMovies = async (): Promise<ResponseOfMovies> => {
  const data = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const getTrendingMovies = async (): Promise<ResponseOfMovies> => {
  const data = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const getLatestMovie = async (): Promise<DetailsOfMovieType> => {
  const data = await fetch(`${API_URL}/movie/latest?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const searchMovies = async (
  query: string
): Promise<SearchResponseType> => {
  const data = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const response = await data.json();
  return response;
};
