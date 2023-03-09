import { useState } from "react";
import "./TrendingFilters.css";

export const TrendingFilters = () => {
  const [active, setActive] = useState<{}>({
    popular: true,
    trending: false,
    latest: false,
  });

  const handleClick = (key: string) => {
    const newObject = {};

    for (const item in active) {
      if (active.hasOwnProperty(item)) {
        newObject[item] = false;
      }
    }
    newObject[key] = true;
    setActive(newObject);
  };

  const buttonClassName = (key: string) => `${active[key] ? "active" : null}`;

  return (
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
  );
};
