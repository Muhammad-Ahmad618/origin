import { useQuery } from "@tanstack/react-query";
import {FaPlus } from "react-icons/fa";
import CartBtn from "./Add_to_cart_Btn";
import { fetchDetailedGameData } from "../api/games";

export default function GameCards({
  title,
  genre,
  date,
  number = 3,
  specifics,
}) {
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["detailedGames", genre, number, date, specifics],
    queryFn: () =>
      fetchDetailedGameData({ genre, numbers: number, dates: date, specifics }),
  });

  if (isLoading) {
    return <p className="text-white">Loading Games ....</p>;
  }
  if (error) {
    return <p className="text-red-500">Error Loading Games</p>;
  }

  return (
    <div>
      <h3 className="text-[1.8rem] text-white font-medium pb-8">{title}</h3>
      <div className="grid grid-cols-3 gap-x-5 w-full">
        {games.map((game) => (
          <div className="flex flex-col gap-x-4 w-full text-white">
            {/* Game Image Container */}
            <div className="group aspect-[8/5] cursor-pointer relative">
              <span className="bg-gradient-to-r from-purple-400 hidden group-hover:block to-purple-600 p-2 shadow-sm shadow-black rounded-full absolute top-2 right-2 z-10">
                <FaPlus className="text-white text-xs" />
              </span>
              <img
                src={game.background_image}
                alt={game.name}
                className="rounded-md w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
              />
            </div>

            {/* Game Detail Container */}

            <div className="py-4 space-y-4 w-full h-full">
              <h1
                className="text-[1.5rem] font-bold cursor-pointer"
                style={{ textShadow: "1px 1px 2px black" }}
              >
                {game.name}
              </h1>
              <p className="text-sm font-medium text-[#ff32bb]">
                {game.publishers} | {game.developers}
              </p>
              <p className="text-sm text-gray-400  leading-relaxed line-clamp-2">
                {game.description}
              </p>
              <CartBtn />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
