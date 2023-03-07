import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../../hooks/useGetMovieDetails";

export const MoviePage = () => {
  const { id } = useParams();
  const { movie } = useGetMovieDetails(id!);

  const imgSrc = `http://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const imgAlt = `Imagen aluciva a la pelicula ${movie?.title}`;

  return (
    <section className="moviePage">
      <h1>{movie?.title}</h1>
      <img src={imgSrc} alt={imgAlt} />
    </section>
  );
};
