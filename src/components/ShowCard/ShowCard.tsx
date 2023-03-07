import { useNavigate } from "react-router-dom";
import { ShowResponseType } from "../../types/Shows";
import "./ShowCard.css";

interface Props {
  show: ShowResponseType;
}

export const ShowCard = ({ show }: Props) => {
  const navigate = useNavigate();

  const imgSrc = `http://image.tmdb.org/t/p/w500/${show.poster_path}`;
  const imgAlt = `Imagen aluciva a la pelicula ${show.name}`;

  const handleClick = () => navigate(`/show/${show.id}`);

  return (
    <li className="movieCard" onClick={handleClick}>
      <img src={imgSrc} alt={imgAlt} />
      <strong>{show.name}</strong>
    </li>
  );
};
