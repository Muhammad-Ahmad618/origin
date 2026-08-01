import { memo, useState } from "react";

const GameRow = memo(function GameRow({ game, onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group flex w-full cursor-pointer items-center rounded-xl p-2 transition-colors duration-200 hover:bg-white/5"
      onClick={() => onNavigate(game.id)}
    >
      <div className="relative basis-[20%] overflow-hidden rounded-[10px]">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse rounded-[10px] bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-purple-950/60" />
        )}
        <img
          src={game?.background_image}
          alt={game?.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`aspect-[5/7] w-full rounded-[10px] object-cover transition-all duration-300 ease-out group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="basis-[80%] space-y-2 px-4 text-white">
        <h1 className="text-base font-medium transition-colors duration-200 group-hover:text-purple-200 md:text-[1.1rem]">
          {game?.name || "Name not available"}
        </h1>
        <p className="line-clamp-1 text-xs font-medium leading-6 text-gray-400">
          Rating: {game?.rating || "5.0/5"}
        </p>
        <p className="text-xs font-semibold text-[#ca2dbd] md:text-sm">
          ${game?.price || "0.00"}
        </p>
      </div>
    </div>
  );
});

export default GameRow;
