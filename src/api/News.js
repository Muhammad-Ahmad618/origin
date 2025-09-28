import axios from "axios";

const API_KEY = import.meta.env.VITE_EPIC_KEY;

const options = {
      method: 'GET',
      url: 'https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/5',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'epic-games-store.p.rapidapi.com'
      }
    };

export const FetchNews = async() => {
    
    try{
        const response = await axios.request(options)
        return response.data
    }
    catch(error){
        console.log("Error Cannnot Fetch Data", error)
    }
}