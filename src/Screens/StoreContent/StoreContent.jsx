import HeroSectionSlider from '../../Components/HeroSectionSlider/HeroSectionSlider'
import GameGrid from '../../Components/GameGrid'
import GamesSlider from '../../Components/GamesSlider'
import Categories from '../../Components/CategoriesSlider'
import GameCards from '../../Components/GameCards'

function StoreContent() {
  return (
    <div className='pt-28 pb-10 sm:py-28 max-w-screen-2xl px-5 lg:px-24 mx-auto'>
      <HeroSectionSlider/>
      <div className='pt-10 sm:pt-28 space-y-16 mx-auto'>
      <GamesSlider
      title = "Discover Something New"
      numbers = "25"
      dates = "2024-01-01,2025-08-20"
      />      
      <Categories/>
      <GamesSlider 
      title="Top Speed" 
      genre = "racing"
      numbers = '20'
      dates = "2020-01-01,2025-01-30"
      specifics="Need for Speed Forza Horizon,MotoGP Dirt F1,Assetto Corsa Project Cars The Crew,GranTurismo "
      />
      <GameCards  
      title="Game of the Year" 
      genre = 'role-playing-games-rpg'
      dates = "2020-01-01,2025-08-30"
      specifics="Black Desert,Elden Ring"
      />
      <div className='space-y-4'>      
      <GamesSlider
      title="Top Seller"
      dates = "2020-01-01,2025-07-30"
      genre = "3"
      />
      <GameCards
      genre = 'action'
      dates = "2020-01-01,2025-01-30"
      />
      </div>
       <GamesSlider
      title="Action" 
       dates = "2020-01-01,2025-01-30"
      genre = "fighting"
      numbers="30"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-10">
      <GameGrid
      title = "Most Anticipated"
      border = "border-r border-gray-600"
      />
       <GameGrid
      title = "Most Played"
      border = "border-r border-gray-600"
      />
       <GameGrid
      title = "New Releases"
      border = "border-r border-gray-600 lg:border-none"
      />
      </div>
      </div>
      </div>
  )
}

export default StoreContent
