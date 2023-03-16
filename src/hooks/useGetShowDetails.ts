import { useEffect, useState } from "react";
import { getShowDetails } from "../services/show.service";
import { DetailsOfShowType } from "../types/Shows";

export const useGetShowDetails = (id: string) => {
  const [show, setShow] = useState<DetailsOfShowType>();
  const intId = parseInt(id);

  useEffect(() => {
    getShowDetails(intId).then((data) => setShow(data));
  }, []);

  return { show };
};
