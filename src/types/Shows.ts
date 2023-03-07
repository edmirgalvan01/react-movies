export type ResponseOfShows = {
  page: number;
  results: Array<ShowResponseType>;
  total_results: number;
  total_pages: number;
};

export type ShowResponseType = {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};
