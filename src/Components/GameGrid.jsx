import { MdArrowForwardIos } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchBaseGameData } from "../api/games";

export default function GameGrid({title, border, genre, numbers = 5, dates, specifics}) {

  const {data: games, isLoading, error} = useQuery({
    
    queryKey:['games', genre, numbers, dates, specifics],
    queryFn: () => fetchBaseGameData({genre, numbers, dates, specifics})
  })

  if(isLoading){
    return<div>
         <div className="h-3 w-[20%] bg-white/10 animate-pulse mb-10"></div>  
        <div className="grid grid-cols-3 gap-x-10">
        <div className="border-r border-gray-400 space-y-5 pr-3">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex w-full items-center group cursor-pointer hover:bg-white/10 p-2 rounded-xl"
          >
            <div className="basis-[20%] bg-white/10 animate-pulse aspect-[4/5] rounded-md">
            </div>

            <div className="space-y-5 px-4 text-white basis-[80%] ">
              <h1 className="bg-white/10 h-2 rounded-md animate-pulse"></h1>
              <p className="bg-white/10 h-2 rounded-md animate-pulse"></p>
              <p className="bg-white/10 h-2 rounded-md animate-pulse">
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
  }

  if(!games || games.length === 0){
    return <p className="text-red-500 text-center">Shit Found Nothing </p>
  }

  if(error){
    console.log("Error While Fetching:", error)
    return <p className="text-sm text-center">Error Whilte Fetching</p>
  }

  return (
    <div className={`${border} my-10`}>
      <div className="pb-5 ">
        <a className="group text-[1.2rem] md:text-[1.5rem] text-white font-bold cursor-pointer flex items-center gap-x-2">
          {title}
          <span>
            <MdArrowForwardIos className="text-[1.2rem] md:text-[1.5rem] transition-all mt-1.5 duration-300 ease-in-out group-hover:translate-x-2" />
          </span>
        </a>
        <div className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-600 h-1 max-w-[13rem] w-full rounded-full mt-2"></div>
      </div>

        <div className="space-y-5 pr-3">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex w-full items-center group cursor-pointer hover:bg-white/10 p-2 rounded-xl"
          >
            <div className="basis-[20%]">
              <img
                src={game.background_image}
                alt={game.name}
                className="object-cover aspect-[4/5] rounded-[10px]"
              />
            </div>

            <div className="space-y-2 px-4 text-white basis-[80%] ">
              <h1 className="font-medium text-base md:text-[1.1rem]">{game.name}</h1>
              <p className="line-clamp-3 text-xs text-gray-400 font-medium leading-6">Rating : {game.rating}</p>
              <p className="text-xs md:text-sm font-semibold text-[#ca2dbd]">
                Relase Date: {game.released}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  );
}
