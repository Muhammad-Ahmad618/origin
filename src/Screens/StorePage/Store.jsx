import NavBar from '../../Components/StoreNavBar'
import CoverSlider from '../../Components/StoreCoverSlider'
import FeaturedGames from '../../Components/GamesSlider'
import Categories from '../../Components/CategoriesSlider'
import GameCoverCards from '../../Components/GameCoverCards'
import axios from 'axios'
import GameCards from '../../Components/GameCards'
import Footer from '../../Components/Footer'
import UpcomingGames from '../../Components/GameBox'
import CartProvider from '../../CartContext/CartContext'

export default function Store() {

  const API_KEY =  import.meta.env.VITE_RAWG_KEY;

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
      genre = "racing"
      dates = "2020-01-01,2025-01-30"
      specifics="Forza horizon,MotoGP,Need for Speed"
      />
      <GameCards  
      title="Game of the Year" 
      genre = 'role-playing-games-rpg'
      dates = "2020-01-01,2025-01-30"
      specifics="Elden Ring, Dark Soul, nioh"
      />
      <div className='space-y-4'>      
      <GameCoverCards 
      title="Top Seller"
      dates = "2020-01-01,2025-07-30"
      genre = "3"
      />
      <GameCards
      genre = 'action'
      dates = "2020-01-01,2025-01-30"
      FetchDetailedGames={fetch_Detailed_Game_Data}
      />
      </div>
       <GameCoverCards 
      title="Action" 
       dates = "2020-01-01,2025-01-30"
      genre = "fighting"
      specifics="Guilty gear, Street Fighter, Tekken, street of rage, king of fightersXV"
      />
      <UpcomingGames/>
      </div>
      </div>
      <Footer/>
    </div>
    </CartProvider>
  )
}
