import { useDiscoverShows } from "../../hooks/useDiscoverShows";
import { ListOfCardsWithTitle } from "../ListOfCards/ListOfCards";
import { ShowCard } from "../ShowCard/ShowCard";

export const DiscoverNewShows = () => {
  const { tvShows } = useDiscoverShows();

  return (
    <ListOfCardsWithTitle title="Descubre nuevas series" link="/descubre-shows">
      {tvShows?.results.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </ListOfCardsWithTitle>
  );
};
