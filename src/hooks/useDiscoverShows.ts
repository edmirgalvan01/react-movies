import { useEffect, useState } from "react";
import { discoverShows } from "../services/show.service";
import { ResponseOfShows } from "../types/Shows";

export const useDiscoverShows = () => {
  const [tvShows, setTvShows] = useState<ResponseOfShows>();

  useEffect(() => {
    discoverShows().then((data) => setTvShows(data));
  }, []);

  return { tvShows };
};
