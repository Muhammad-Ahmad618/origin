import { useEffect, useState} from 'react';
import { FaStar, FaStarHalfAlt  } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import CartBtn from './Add_to_cart_Btn';

export default function HorizontalGameCard({title, FetchDetailedGames, specifices }) {
    const [game, setGames] = useState([]);
     
    useEffect(()=> {
       
      const FetchData = async() => {
      const responseData = await FetchDetailedGames('4',1,'2020-01-01,2025-02-25',specifices)
    
        // Ensure that the response is an array or fallback to an empty array
        if (Array.isArray(responseData)) {
          setGames(responseData);
        } else {
          setGames([]); // Set empty array if the response is not an array
        }
      }
        
      FetchData()
  
    },[FetchDetailedGames,specifices])

    if (game.length === 0) {
        return <div className='text-center text-[1.3rem] text-white'>No games found.</div>;
      }
  
  return (
    <div className='group'>
    <h3 className='text-[1.8rem] text-white font-medium pb-8'>{title}</h3>
    <div className='flex gap-x-4 w-full bg-[#2e2e2e88] rounded-md text-white h-[16.7rem]'>
      
      {/* Game Image Container */}

      <div className='max-w-[40%] w-full cursor-pointer relative h-full'>
      <IoMdAddCircle className='text-[1.8rem] absolute top-2 right-2 z-10 hidden group-hover:block hover:text-black'/>
          <img src={game[0].background_image} alt={game[0].name} className='rounded-md w-full h-full object-cover group-hover:opacity-80 transition-all duration-300' />
      </div>
      
      {/* Game Detail Container */}

      <div className='p-4 space-y-2 max-w-[60%] w-full h-full'>
        <h1 className='text-[2rem] font-medium cursor-pointer'
        style={{ textShadow: '1px 1px 2px black' }}>{game[0].name}</h1>
        <p className='text-sm text-[#35f462] font-medium'>Release Date : {game[0].released}</p>
        <p className='text-xs text-gray-200 leading-relaxed line-clamp-3'>{game[0].description}</p>
        
        <div className='flex items-center gap-x-2 text-sm'>
          <ul className='flex text-yellow-400 gap-x-1'>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li><FaStarHalfAlt/></li>
          </ul>
        <p className='font-medium text-yellow-400'>({game[0].rating})</p>
        </div>
        <p className=''>{game[0].publishers} | {game[0].developers}</p>
        <div className='flex justify-end w-full'>
      <CartBtn/>
      </div>
      </div>

    </div>
    </div> 
  );
}
