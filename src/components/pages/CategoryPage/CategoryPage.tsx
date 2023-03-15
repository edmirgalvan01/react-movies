import { useParams } from "react-router-dom";
import { useGetMoviesByGenre } from "../../../hooks/useGetMoviesByGenre";

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const { movies } = useGetMoviesByGenre(categoryName!);

  return (
    <div className="categoryPage">
      <h1>{categoryName}</h1>
    </div>
  );
};
