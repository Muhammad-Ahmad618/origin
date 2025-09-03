import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdArrowForwardIos } from "react-icons/md";
import { FaPlus } from "react-icons/fa"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

export default function NewGamesSlider() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apikey = "a82e5a54c5794044a40b36a465e6c265";
    const API_URL = `https://api.rawg.io/api/games?key=${apikey}&dates=2024-01-01,2025-01-20&platforms=4&ordering=-added&page_size=25&exclude_additions=true`;

    axios
      .get(API_URL)
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <a className="group text-[1.6rem] text-white font-semibold cursor-pointer flex items-center gap-x-2">
          Discover Something New
          <span>
            <MdArrowForwardIos className="text-[1.5rem] transition-all mt-1.5 duration-300 ease-in-out group-hover:translate-x-2" />
          </span>
        </a>
        <div className="text-[#efeeee71] text-sm text-end flex items-center text-[2rem] gap-x-2">
          <span className="custom-prev p-2 rounded-full bg-white/10 backdrop-blur-md">
            <FaAngleLeft className="text-white text-xs"/>
          </span>
          <span className="custom-next p-2 rounded-full bg-white/10 backdrop-blur-md">
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
            {games.map((game) => (
              <SwiperSlide
                key={game.id}
                className="max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem]"
              >
                <div className="rounded-xl group cursor-pointer">
                  <div className="relative w-full aspect-[4/5]">
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="object-cover w-full h-full rounded-lg transition-all duration-150 group-hover:opacity-70"
                    />
                    <span className="bg-gradient-to-r from-purple-400 hidden group-hover:block to-purple-600 p-2 shadow-sm shadow-black rounded-full absolute top-2 right-2">
                     <FaPlus className="text-white text-xs"/>
                    </span>
                  </div>
                  <div className="flex flex-col justify-between text-white py-3 text-left">
                    <div>
                      <p className="text-gray-500 font-medium text-sm">
                        Base Game
                      </p>
                      <h3 className="text-[1.05rem] font-medium">
                        {game.name}
                      </h3>
                    </div>
                    <h2 className="text-[1rem] font-semibold pt-3 text-gray-300">
                      Free
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
