import { useState } from "react";
import { useFilterMainMovie } from "../../hooks/useFilterMainMovie";

import "./FilteredMovie.css";

export const FilteredMovie = () => {
  const [active, setActive] = useState<{}>({
    popular: true,
    trending: false,
    latest: false,
  });

  const { setFilter } = useFilterMainMovie();
  const { filteredMovie } = useFilterMainMovie();

  const handleClick = (key: string) => {
    const newObject = {};

    for (const item in active) {
      if (active.hasOwnProperty(item)) {
        newObject[item] = false;
      }
    }
    newObject[key] = true;
    setFilter(key);
    setActive(newObject);
  };

  const bgImg = `url(http://image.tmdb.org/t/p/w500/${filteredMovie?.backdrop_path})`;
  const buttonClassName = (key: string) => `${active[key] ? "active" : null}`;

  return (
    <div className="filteredMovie">
      <div className="trendingFilters">
        <button
          className={buttonClassName("popular")}
          onClick={() => handleClick("popular")}
        >
          Popular
        </button>
        <button
          className={buttonClassName("trending")}
          onClick={() => handleClick("trending")}
        >
          Tendencia
        </button>
        <button
          className={buttonClassName("latest")}
          onClick={() => handleClick("latest")}
        >
          Reciente
        </button>
      </div>
      <div className="mainMovie" style={{ backgroundImage: bgImg }}></div>
    </div>
  );
};
