import NavBar from '../../Components/StoreNavBar'
import CoverSlider from '../../Components/StoreCoverSlider'
import FeaturedGames from '../../Components/GamesSlider'
import Categories from '../../Components/CategoriesSlider'
import GameCoverCards from '../../Components/GameCoverCards'
import axios from 'axios'
import HorizontalGameCard from '../../Components/HorizontalGameCard'
import Footer from '../../Components/Footer'
import UpcomingGames from '../../Components/GameBox'
import CartProvider from '../../CartContext/CartContext'

export default function Store() {

  const API_KEY =  import.meta.env.VITE_RAWG_KEY;

  if(!API_KEY){
    console.log("RAWG API KEY missing !")
  }

  const fetchGameData = async(genre,numbers,dates,specifics) => {
  
    let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${dates}&platforms=4&genres=${genre}&ordering=-metacritics&page_size=${numbers}`;
    
    if(specifics){
      API_url +=`&search=${specifics}`
    }
    try {
      const response = await axios.get(API_url);
      
      if (response.data && response.data.results) {
        return response.data.results;  // Return the results if available
      } else {
        console.log('No results found:', response.data);  // Log the response for debugging
        return [];  // Return empty array if no results
      }
    } catch (error) {
      console.error('Error while fetching:', error);
      return [];  // Return empty array in case of error
    }
  }

  const fetch_Detailed_Game_Data = async (genre,numbers,dates,specifics) => {

    let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${dates}&platforms=4&genres=${genre}&ordering=-metacritics&page_size=${numbers}`;
    
    if(specifics){
      API_url +=`&search=${specifics}`
    }
    
    try{
    const response = await axios.get(API_url)
    const gameList = response.data.results;

    const game_With_Details = await Promise.all(
      gameList.map(async(game) => {
        const gameDetails = await axios.get(
          `https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`
        );
        return {
          ...game,
          description: gameDetails.data.description_raw,
          publishers: gameDetails.data.publishers.map(pub => pub.name).join(","),
          tags: gameDetails.data.tags.map(tag => tag.name).join(", "),
          developers:gameDetails.data.developers.map(dev => dev.name).join(",")
        }
      })
    )
    return game_With_Details
  }
  catch(error){
    console.log("Error while Fetching data", error)
    return [];
  }
  
  }

  return (
    <CartProvider>
    <div className='min-h-screen bg-[#121212]'>
      <NavBar/>
      <div className='py-28 max-w-screen-2xl px-5 lg:px-24 mx-auto'>
      <CoverSlider/>
      <div className='pt-28 space-y-16 mx-auto'>
      <FeaturedGames/>      
      <Categories/>
      <GameCoverCards 
      title="Top Speed" 
      FetchGames={fetchGameData} 
      genre = "racing"
      dates = "2020-01-01,2025-01-30"
      specifics="Forza,MotoGP,Need for Speed"
      />
      <HorizontalGameCard  
      title="Game of the Year" 
      FetchDetailedGames={fetch_Detailed_Game_Data}
      specifics="Elden Ring shadow of the erd tree"
      />
      <GameCoverCards 
      title="Fantasy" 
      FetchGames={fetchGameData}
      genre = "role-playing-games-rpg"
      specifics="The witcher ,baldur's gate,nioh,Final Fantasy,Dota"
      />
      <HorizontalGameCard
      title="Most Anticipated"
      FetchDetailedGames={fetch_Detailed_Game_Data}
      specifics="Final Fantasy VII rebirth"
      />
       <GameCoverCards 
      title="Action" 
      FetchGames={fetchGameData}
      genre = "fighting"
      specifics="street fighter, Guilty gear, street of rage, king of fightersXV"
      />
      
      <UpcomingGames/>
      </div>
      </div>
      <Footer/>
    </div>
    </CartProvider>
  )
}
