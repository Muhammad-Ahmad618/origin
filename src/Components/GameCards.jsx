import { useQuery } from "@tanstack/react-query";
import LargeGameCards from "./LargeGameCards/LargeGameCards";
import { fetchDetailedGameData } from "../api/games";
import { useEffect, useRef } from "react";

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
    refetch,
  } = useQuery({
    queryKey: ["detailedGames", genre, number, date, specifics],
    queryFn: () =>
      fetchDetailedGameData({ genre, numbers: number, dates: date, specifics }),
    enabled: false,
  });

  const cardRef = useRef(null);

  useEffect(() => {
    
    const element = cardRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      if(entry.isIntersecting){
          refetch();
          observer.disconnect();
      }
    },
    {threshold:0.1}
  )
   
  if(element){
    observer.observe(element)
  }
   return () => {
    if(element){observer.unobserve(element)}
  }
  
  },[refetch])

  return (
    <div ref={cardRef}>
      <h3 className="text-[1.5rem] sm:text-[1.8rem] text-white font-medium pb-8">{title}</h3>
      {isLoading && 
      (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {[...Array(3)].map((_, index) => (
          <div className="flex flex-col gap-x-4 w-full " key={index}>
            {/* Game Image Container */}
            <div className="group aspect-[8/5] animate-pulse relative rounded-md bg-white/10"></div>

            {/* Game Detail Container */}

            <div className="py-4 space-y-4 w-full h-full ">
              <h1 className=" bg-white/10 w-[50%] h-2 animate-pulse rounded-md"></h1>
              <p className="w-full h-2 bg-white/10 animate-pulse rounded-md"></p>
              <p className="w-full h-2 bg-white/10 animate-pulse rounded-md"></p>
              <div className="h-10 w-[30%] bg-white/10 animate-pulse rounded-md">
              </div>
            </div>
          </div>
        ))}
      </div>)} 

      {error && <p className="text-red-500">Error Loading Games</p>}   
     
      {!isLoading && !error &&(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {games?.map((game) => (
        <LargeGameCards game={game} key={game.id}/>
        ))}
      </div>
      )}
    </div>
  );
}
