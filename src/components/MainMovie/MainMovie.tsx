import { useFilterMainMovie } from "../../hooks/useFilterMainMovie";
import "./MainMovie.css";

export const MainMovie = () => {
  const { filteredMovie } = useFilterMainMovie();

  const bgImg = `url(http://image.tmdb.org/t/p/w500/${filteredMovie?.backdrop_path})`;

  return <div className="mainMovie" style={{ backgroundImage: bgImg }}></div>;
};
