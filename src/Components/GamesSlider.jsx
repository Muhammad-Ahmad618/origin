
import {useQuery} from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdArrowForwardIos } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { fetchBaseGameData } from "../api/games";
import SmallGameCards from "./SmallGameCards/SmallGameCards";

export default function GamesSlider({title, genre ,numbers, dates, specifics}) {



const { data: games = [], isLoading, error } = useQuery({
  queryKey: ["games", numbers, dates],
  queryFn: () => fetchBaseGameData({genre, numbers, dates, specifics}),
});

  if(error){
    return <p className="text-red-500 text-center">Error fetching games !</p>
  }

  if(games.lenght === 0){
    return <p className="text-red-500 text-center">No Games Found !</p>
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <a className="group text-[1.2rem] sm:text-[1.5rem] text-white font-bold cursor-pointer flex items-center gap-x-2">
          {title}
          <span>
            <MdArrowForwardIos className="text-[1.5rem] transition-all mt-1.5 duration-300 ease-in-out group-hover:translate-x-2" />
          </span>
        </a>
        <div className="text-[#efeeee71] text-sm text-end flex items-center text-[2rem] gap-x-2">
          <span className="custom-prev p-2 rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20">
            <FaAngleLeft className="text-white text-xs"/>
          </span>
          <span className="custom-next p-2 rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20">
            <FaAngleRight className="text-white text-xs"/>
          </span>
        </div>
      </div>
      {isLoading ? (
        <div className="pt-8 flex gap-x-6 w-full">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="max-w-[15rem] w-full animate-pulse">
              <div className="relative w-full h-[16rem] bg-white/10 rounded-xl"></div>
              <div className="py-3 text-left h-[9rem]">
                <div className="h-[3rem] space-y-2">
                  <p className="py-2 w-[30%] bg-white/10 rounded-2xl"></p>
                  <h3 className="py-2 w-full bg-white/10 rounded-2xl"></h3>
                </div>
                <h2 className="py-2 w-[20%] bg-white/10 rounded-2xl"></h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-8 text-end">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={'auto'}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: {
                // phones
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                // small tablets
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                // tablets
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                // laptops
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                // desktops
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {games?.map((game) => (
              <SwiperSlide
                key={game.id}
                className="max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem]"
              >
               <SmallGameCards game = {game}/>
              </SwiperSlide>
            ))} 
          </Swiper>
        </div>
      )}
    </div>
  );
}
