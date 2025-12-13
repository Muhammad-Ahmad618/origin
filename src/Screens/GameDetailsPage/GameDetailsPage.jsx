import GameDetailsLayout from "../../Components/layout/GameDetailLayout";
import { useGameDetails } from "../../Hooks/useGameDetails";
import { useParams } from "react-router-dom";

export default function GameDetailsPage() {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGameDetails(id);

  return (
    <>
      <GameDetailsLayout game={game} isLoading={isLoading} error={error} />
    </>
  );
}
