import React from 'react'

export default function GameBox() {

    const Games2025 = [

        {
          thumbnail:'https://gaming-cdn.com/images/products/10365/orig/final-fantasy-vii-rebirth-pc-game-steam-cover.jpg?v=1737245241',
          heading: 'Final Fantasy VII Rebirth',
          body:"FINAL FANTASY VII REMAKE Project Trilogy Part 2 After escaping Midgar, the City of Mako, Cloud and his friends overcome the boundaries of faith and step into the unknown wasteland. A vast world with many characteristics awaits, as well as a new story where you will run through fields on chocobos to freely explore points of interest.■ StoryThe lifestream forms the very cycle of existence, with all life born from the planet and all returning to its embrace. ",
          ReleaseDate:'23-01-2025'
        }
        ,

        {
            thumbnail:'https://static.bandainamcoent.eu/high/synduality/synduality/00-page-setup/_Old/syn-header-mobile.jpg',
            heading: 'Synduality: Echos of Eda',
            body:"SYNDUALITY Echo of Ada takes place in 2222, years after a mysterious poisonous rain called The Tears of the New Moon wiped out most of humanity and birthed deformed creatures that now hunt the population. Amidst the calamity, humans are forced to build an underground haven to survive",
            ReleaseDate:'23-01-2025'

        }
    ]        

  return (
    <div>
     <div className='text-center py-10 '>
      <h3 className='text-[2rem] text-white font-medium'>Upcoming Games of 2025</h3>
      <div className="bg-custom-gradient2 h-1 max-w-[26rem] w-full mx-auto rounded-full mt-2"></div>
    </div>

 <div className='flex justify-center gap-x-10'>
  {Games2025.map((game,index) =>(
      <div key={index} className='max-w-[35rem] w-full group cursor-pointer '>
       
       <div>
         <img src={game.thumbnail} alt={game.heading} className='object-cover w-full h-full rounded-t-[20px] transition-all duration-500 group-hover:opacity-55' />       
       </div>

       <div className='space-y-3 p-4 text-white bg-[#2e2e2e88] rounded-b-[20px]'>
          <h1 className='font-medium text-[1.3rem]'>{game.heading}</h1>
          <p className='line-clamp-3 text-sm leading-6'>{game.body}</p>
          <p className='text-sm font-semibold text-[#ca2dbd]'>Relase Date: {game.ReleaseDate}</p> 
          <div>
          </div>
       </div>
      </div>
))}
 </div>
    </div>
  )
}
