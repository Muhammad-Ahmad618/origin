import GameDetailsLayout from "../../Components/layout/GameDetailLayout";
import { useParams } from "react-router-dom";

export default function GameDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <GameDetailsLayout />
    </>
  );
}
