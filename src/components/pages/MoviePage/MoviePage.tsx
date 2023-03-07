import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { id } = useParams();

  return <div>MoviePage</div>;
};
