import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../../hooks/useGetMovieDetails";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import "./MoviePage.css";

export const MoviePage = () => {
  const { id } = useParams();
  const { movie } = useGetMovieDetails(id!);

  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const imgSrc = `http://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const background = `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgSrc})`;
  const colorFavorite = isFavorite ? "red" : "#eee";

  return (
    <section className="moviePage">
      <div className="moviePage--poster" style={{ background: background }}>
        <IoIosArrowBack size={25} onClick={() => navigate(-1)} />
        <AiOutlineHeart
          color={colorFavorite}
          size={25}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>
      <div className="moviePage--information">
        <h1>{movie?.title}</h1>
        <h3 className="moviePage--rating">{movie?.vote_average.toFixed(1)}</h3>
        <div className="moviePage--listOfGenres">
          {movie?.genres.map((item) => (
            <Link
              key={item.id}
              to={`/category/${item.name}`}
              className="genreCard"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <p className="moviePage--overview">{movie?.overview}</p>
      </div>
    </section>
  );
};
