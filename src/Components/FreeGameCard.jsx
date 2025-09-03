import React from "react";
import { MdWindow } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function FreeGameCard() {
  const CardContent = [
    {
      img: require("../Assets/FreeGames/image 4.png"),
      title: "Warframe: Whispers in the Walls",
      description: `The next chapter in Warframe’s cinematic narrative has arrived! Whispers in the Walls is available now!`,
    },
    {
      img: require("../Assets/FreeGames/image 5.png"),
      title: "Destiny 2 - The Dawning",
      description: `Tis the season for festive bounties, cookies, gifts, and snowball fights, of course. Open to all!`,
    },
    {
      img: require("../Assets/FreeGames/image 6.jpg"),
      title: "Bio Mutant",
      description: `Tis the season for festive bounties, cookies, gifts, and snowball fights, of course. Open to all!`,
    },
  ];

  return (
    <div className="flex items-center flex-wrap md:flex-nowrap flex-row justify-evenly py-14 gap-y-10 gap-x-3 sm:gap-x-7 md:gap-x-10 md:gap-y-0">
      {CardContent.map((card, index) => (
        <div key={index} className="text-white cursor-pointer transform transition-transform ease-in-out duration-500 hover:scale-[1.03]    max-w-[90%] min-[590px]:max-w-[15rem] md:max-w-[80%] w-full">

          <img src={card.img} alt="GameImage" className="h-auto w-full object-cover rounded-t-lg"/>
          
          <div className="bg-custom-black-80 p-2 md:p-4 h-[11rem] sm:h-[12rem] lg:h-[14rem] flex flex-col justify-around rounded-b-lg">
            <div className="pt-2 space-y-2">
            <div class="h-8 overflow-hidden">
              <h3 className="font-medium text-[0.7rem] min-[460px]:text-xs sm:text-[0.9rem] lg:text-[1.1rem]">{card.title}</h3>
            </div>
              <ul className="flex items-center py-1 sm:py-2 gap-x-1 text-[0.6rem] min-[460px]:text-xs sm:text-sm text-yellow-400">
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStarHalfAlt/></li>
                <span className="text-white">(4.4)</span>
              </ul>
              <div class="h-8 lg:h-auto overflow-hidden">
              <p className=" text-xs lg:text-sm text-gray-500 line-clamp-3 ">{card.description}</p>
              </div>
            </div>

            <div className="flex justify-between items-center sm:py-2 ">
              <h3 className="font-medium text-[0.7rem] min-[460px]:text-xs md:text-[1rem] text-purple-500">Free to Play</h3>
              <MdWindow className="text-[1.1rem] md:text-[1.3rem]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
