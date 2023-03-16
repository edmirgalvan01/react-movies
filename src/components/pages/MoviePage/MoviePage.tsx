import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../../hooks/useGetMovieDetails";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { PosterCard } from "../../PosterCard/PosterCard";
import "./MoviePage.css";

export const MoviePage = () => {
  const { id } = useParams();
  const { movie } = useGetMovieDetails(id!);

  return (
    <section className="moviePage">
      <PosterCard path={movie?.poster_path} />
      <div className="moviePage--information">
        <h1>{movie?.title}</h1>
        <h3 className="moviePage--rating">{movie?.vote_average.toFixed(1)}</h3>
        <ListOfGenres genres={movie?.genres} />
        <p className="moviePage--overview">{movie?.overview}</p>
      </div>
    </section>
  );
};
