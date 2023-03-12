import { useDiscoverShows } from "../../../hooks/useDiscoverShows";
import { ShowGridList } from "../../CardGridList/CardGridList";
import "./RecommendedShowsPage.css";

export const RecommendedShowsPage = () => {
  const { tvShows } = useDiscoverShows();

  return (
    <div className="recommendedShowsPage">
      <h1>Descubre nuevas series</h1>
      <ShowGridList listOfShows={tvShows?.results} />
    </div>
  );
};
