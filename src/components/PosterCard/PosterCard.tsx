import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  path?: string;
}

export const PosterCard = ({ path }: Props) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const imgSrc = `http://image.tmdb.org/t/p/w500/${path}`;
  const background = `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgSrc})`;
  const colorFavorite = isFavorite ? "red" : "#eee";

  return (
    <div className="moviePage--poster" style={{ background: background }}>
      <IoIosArrowBack size={25} onClick={() => navigate(-1)} />
      <AiOutlineHeart
        color={colorFavorite}
        size={25}
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </div>
  );
};
