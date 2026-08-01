import { MdArrowForwardIos, MdError, MdRefresh } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchBaseGameData } from "../../../api/games";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GameRow from "../../shared/GameRow";

export default function GameGrid({
  title,
  border,
  genre,
  numbers = 5,
  dates,
  specifics,
}) {
  const {
    data: games,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["games", genre, numbers, dates, specifics],
    queryFn: () => fetchBaseGameData({ genre, numbers, dates, specifics }),
    enabled: false,
  });

  const gridRef = useRef(null);
  useEffect(() => {
    const element = gridRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          refetch();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [refetch]);

  const navigate = useNavigate();
  const handleDetailPageNavigation = (id) => navigate(`${id}`);

  const isEmpty = !isLoading && !error && (!games || games.length === 0);

  return (
    <div className={`${border} my-5 sm:my-10`} ref={gridRef}>
      {isLoading && (
        <div className="w-full">
          <div className="mb-5 h-3 w-[50%] animate-pulse rounded-full bg-white/10 sm:mb-10" />
          <div className="space-y-5 border-r border-white/10 pr-3">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex w-full items-center rounded-xl p-2"
              >
                <div className="aspect-[4/5] basis-[23%] animate-pulse rounded-md bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-purple-950/60" />
                <div className="basis-[80%] space-y-5 px-4">
                  <div className="h-2 animate-pulse rounded-md bg-white/10" />
                  <div className="h-2 animate-pulse rounded-md bg-white/10" />
                  <div className="h-2 w-1/2 animate-pulse rounded-md bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="relative flex min-h-[16rem] flex-col items-center justify-center gap-y-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="pointer-events-none absolute -top-16 -left-16 h-52 w-52 rounded-full bg-purple-600/15 blur-[80px]" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/20 bg-purple-950/40">
            <MdError className="text-2xl text-purple-300" />
          </div>
          <h4 className="relative text-base font-semibold text-purple-100">
            Couldn't load {title || "this section"}
          </h4>
          <button
            onClick={() => refetch()}
            className="relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-purple-100 backdrop-blur transition hover:bg-white/[0.08]"
          >
            <MdRefresh className="text-base" />
            Retry
          </button>
        </div>
      )}

      {isEmpty && (
        <div className="flex min-h-[10rem] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-center backdrop-blur-xl">
          <p className="text-sm font-medium text-purple-100/60">
            No games found here yet
          </p>
        </div>
      )}

      {!error && !isLoading && games?.length > 0 && (
        <>
          <div className="pb-5">
            <a className="group flex cursor-pointer items-center gap-x-2 text-[1.2rem] font-bold text-white md:text-[1.5rem]">
              {title}
              <span>
                <MdArrowForwardIos className="mt-1.5 text-[1.2rem] transition-all duration-300 ease-in-out group-hover:translate-x-2 md:text-[1.5rem]" />
              </span>
            </a>
            <div className="mt-2 h-1 w-full max-w-[13rem] rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-blue-600" />
          </div>

          <div className="space-y-2 mr-2">
            {games.map((game, index) => (
              <GameRow
                key={game.id ?? index}
                game={game}
                onNavigate={handleDetailPageNavigation}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
