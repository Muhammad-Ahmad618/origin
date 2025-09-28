import { useQuery } from "@tanstack/react-query";
import { FetchNews } from "../api/News";

export default function VideoGamesNews() {
  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news"],
    queryFn: FetchNews,
  });
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error fetching news</p>;

  return (
    <div className="flex flex-col xl:flex-row gap-x-10 py-10 gap-y-10">
      {news[0] && (
        <div className="xl:max-w-[65%] w-full ">
          <div>
            <img
              src={news[0].trendingImage}
              alt={news[0].title}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-5 pt-3">
            <h1 className="text-[2.1rem] text-white font-bold">
              {news[0].title}
            </h1>
            <p className="text-white">{news[0].short}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-1 xl:max-w-[35%] w-full gap-5">
        {news.slice(1).map((article, index) => (
          <div
            key={index}
            className="flex flex-row-reverse h-[10rem] md:h-[8rem] w-full gap-x-3 bg-[#32313156] rounded-xl"
          >
            <div className="max-w-[45%] w-full h-full">
              <img
                src={article.trendingImage}
                alt={article.title}
                className="w-full object-cover h-full rounded-xl "
              />
            </div>
            <div className="text-white max-w-[55%] w-full p-3">
              <h1 className="md:line-clamp-3">{article.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
