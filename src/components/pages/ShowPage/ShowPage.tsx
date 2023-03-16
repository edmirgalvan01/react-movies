import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { useGetShowDetails } from "../../../hooks/useGetShowDetails";

export const ShowPage = () => {
  const { id } = useParams();
  const { show } = useGetShowDetails(id!);

  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const imgSrc = `http://image.tmdb.org/t/p/w500/${show?.poster_path}`;
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
        <h1>{show?.name}</h1>
        <h3 className="moviePage--rating">{show?.vote_average.toFixed(1)}</h3>
        <ListOfGenres genres={show?.genres} />
        <p className="moviePage--overview">{show?.overview}</p>
      </div>
    </section>
  );
};
