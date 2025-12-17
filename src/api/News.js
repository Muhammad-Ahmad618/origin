import axios from "axios";

const API_KEY = import.meta.env.VITE_EPIC_API;

export const FetchNews = async (limit) => {

    const options = {
        method: 'GET',
        url: `https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/${limit}`,
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'epic-games-store.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options)
        return response.data
    }
    catch (error) {
        console.log("Error Cannnot Fetch Data", error)
    }
}