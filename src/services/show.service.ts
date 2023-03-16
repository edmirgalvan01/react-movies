import { API_KEY, API_URL } from "../../consts";
import { DetailsOfShowType, ResponseOfShows } from "../types/Shows";

export const discoverShows = async (): Promise<ResponseOfShows> => {
  const data = await fetch(`${API_URL}/discover/tv?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};

export const getShowDetails = async (
  id: number
): Promise<DetailsOfShowType> => {
  const data = await fetch(`${API_URL}/tv/${id}?api_key=${API_KEY}`);
  const response = await data.json();
  return response;
};
