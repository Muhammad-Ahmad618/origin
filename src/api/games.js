import axios from "axios";


const getGamePrice = (gameId) => {
  
  const storedPrice = localStorage.getItem(`price-${gameId}`)
  if(storedPrice) return parseFloat(storedPrice)
   
  const price = (Math.random()* 60 + 40).toFixed(2)
  console.log(`Generated new price for ${gameId}:`, price)
  localStorage.setItem(`price-${gameId}`,price)
  return parseFloat(price)
}

const API_KEY = import.meta.env.VITE_RAWG_API;
console.log(import.meta.env)
export const fetchBaseGameData = async ({
  genre,
  numbers,
  dates,
  specifics,
}) => {
  let API_url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=4&exclude_additions=true&exclude_tags=nsfw,adult`;

  if (dates) API_url += `&dates=${dates}`;
  if (genre) API_url += `&genres=${genre}`;
  if (numbers) API_url += `&page_size=${numbers}`;

  if (specifics) {
    API_url += `&search=${specifics}&search_precise=true`;
  }

  const { data } = await axios.get(API_url);

  const gamesWithPrice = data.results.map((game) => ({
    ...game,
    price: getGamePrice(game.id)
  }))

  return gamesWithPrice  || [];
};

export const fetchDetailedGameData = async ({
  genre,
  numbers,
  dates,
  specifics,
}) => {
  const gameList = await fetchBaseGameData({
    genre,
    numbers,
    dates,
    specifics,
  });

  return Promise.all(
    gameList.map(async (game) => {
      const { data: gameDetails } = await axios.get(
        `https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`
      );
 
      return {
        ...game,
        description: gameDetails.description_raw,
        publishers: gameDetails.publishers?.map((p) => p.name).join(", ") || "",
        tags: gameDetails.tags?.map((t) => t.name).join(", ") || "",
        developers: gameDetails?.developers.map((d) => d.name).join(", ") || "",
      };
    })
  );
};

// fetches detailed game data for a single game
// used for game detail page

export const fetchFullGameData = async(id) => {
   
  const gameReq = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)

  const screenShotReq = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`)

  const movieReq = await axios.get(`https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`)

  const [gameRes, screenShotRes, movieRes] = await Promise.all([
    gameReq,
    screenShotReq,
    movieReq
  ])

  const game = gameRes.data
  const screenshots = screenShotRes.data.results.map((s) => ({
    type:"image",
    src:s.image
  }))

  const video = movieRes.data.results.map((v) => ({
    type:"video",
    src: v.data.max,
    preview: v.preview
  }))

  const media = [...screenshots, ...video]

  return{
    id:game?.id,
    name:game?.name,
    description_raw:game?.description_raw,
    rating:game?.rating,
    developers:game?.developers,
    platforms:game?.platforms?.map((p) => p.name).join(", ") || "",
    publishers:game?.publishers,
    release_date:game?.released,
    platform:game?.platforms?.map((p) => p.platform.name).join(", ") || "",
    reviews_count:game?.reviews_count,
    genres:game?.genres?.map((g)=>g.name)|| [],
    tags: game?.tags?.map((t) => t.name) || [],
    developers:game?.developers?.map((d) => d.name).join(", ")||"",
    publishers:game?.publishers?.map((p) => p.name).join(", ")||"",
    background_image:game?.background_image,
    media,
    min_requirements:game?.platforms?.find((p) => p.platform.name === 'PC')?.requirements?.minimum || null,
    rec_requirements:game?.platforms?.find((p) => p.platform.name === 'PC')?.requirements?.recommended || null,
    price:getGamePrice(game.id)
  }
}