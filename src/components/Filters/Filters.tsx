import { Link } from "react-router-dom";
import "./Filters.css";

export const Filters = () => {
  return (
    <div className="filters">
      <Link to="/">Todas</Link>
      <Link to="/">Peliculas</Link>
      <Link to="/">Series</Link>
      <Link to="/">Shows TV</Link>
    </div>
  );
};
