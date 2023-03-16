import { useParams } from "react-router-dom";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { useGetShowDetails } from "../../../hooks/useGetShowDetails";
import { PosterCard } from "../../PosterCard/PosterCard";

export const ShowPage = () => {
  const { id } = useParams();
  const { show } = useGetShowDetails(id!);

  return (
    <section className="moviePage">
      <PosterCard path={show?.poster_path} />
      <div className="moviePage--information">
        <h1>{show?.name}</h1>
        <h3 className="moviePage--rating">{show?.vote_average.toFixed(1)}</h3>
        <ListOfGenres genres={show?.genres} />
        <p className="moviePage--overview">{show?.overview}</p>
      </div>
    </section>
  );
};
