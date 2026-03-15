import { fetchFullGameData } from "../api/games";
import { useQuery } from "@tanstack/react-query";

export const useGameDetails = (id) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchFullGameData(id),
  });
};
