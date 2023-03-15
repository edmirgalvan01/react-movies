import { ShowResponseType } from "./Shows";

export type ResponseOfMovies = {
  page: number;
  results: Array<MovieResponseType>;
  total_results: number;
  total_pages: number;
};

export type MovieResponseType = {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type SearchResponseType = {
  movie_results: Array<MovieResponseType>;
  person_results: Array<{
    profile_path?: string;
    adult: boolean;
    id: number;
    // known_for: {} | {}
  }>;
  tv_results: Array<ShowResponseType>;
};

export type DetailsOfMovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id?: string;
  minLength: number;
  maxLength: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    iso_639_1: string;
    name: string;
  }>;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
