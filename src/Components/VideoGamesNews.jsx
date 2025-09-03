import {useState, useEffect} from 'react'
import axios from 'axios'

export default function VideoGamesNews() {
      
    const [news, setNews] = useState([])
    // const apiKey = 'a7131b98a2904c43b4774adb0e350335'
    // const query = 'video games'
    // const pageSize = 7

    const options = {
      method: 'GET',
      url: 'https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/5',
      headers: {
        'x-rapidapi-key': '79e7bd031bmshc3a2b592d2a59d4p137124jsn39431854cdf3',
        'x-rapidapi-host': 'epic-games-store.p.rapidapi.com'
      }
    };
       
    useEffect(()=> {
        
       const fetchNews = async() => {
        
        // try{
        //     const response = await axios.get(
        //     `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`);

        //     setNews(response.data.articles)
        // }
        // catch(error){
        //     console.error("Error fetching Data:", error)
        // }

        try {
          const response = await axios.request(options);
          console.log(response.data)
          setNews(response.data);
        } catch (error) {
          console.error(error);
        }
       } 

       fetchNews()

    },[])  

  return (
    <div className='flex flex-col xl:flex-row gap-x-10 py-10 gap-y-10'>

        {news[0] && (
        <div className='xl:max-w-[65%] w-full '>  
          <div >
            
            <img src={news[0].trendingImage} alt={news[0].title} className='rounded-xl' />

          </div>

          <div className='space-y-5 pt-3'>
            <h1 className='text-[2.1rem] text-white font-bold'>{news[0].title}</h1>
            <p className='text-white'>{news[0].short}</p>
          </div>

        </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-1 xl:max-w-[35%] w-full gap-5'>
        
       {news.slice(1).map((article, index) => ( 
        <div key={index} className='flex flex-row-reverse h-[10rem] md:h-[8rem] w-full gap-x-3 bg-[#32313156] rounded-xl'>
         
         <div className='max-w-[45%] w-full h-full'>
         <img src={article.trendingImage} alt={article.title} className='w-full object-cover h-full rounded-xl '/>
         </div>
         <div className='text-white max-w-[55%] w-full p-3'>
            <h1 className='md:line-clamp-3'>{article.title}</h1>
         </div>
        </div>
     ))}

        </div>
      
    </div>
  )
}

