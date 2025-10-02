import axios from "axios";

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
  return data.results || [];
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
