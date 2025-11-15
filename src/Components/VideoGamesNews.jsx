import { useQuery } from "@tanstack/react-query";
import { FetchNews } from "../api/News";
import { useEffect, useRef } from "react";
import { MdError } from "react-icons/md";

export default function VideoGamesNews() {
  const {
    data: news,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["news"],
    queryFn: FetchNews,
    enabled: false,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          refetch(); // fetch when component enters viewport
          observer.disconnect(); // stop observing after fetch
        }
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [refetch]);

  if (isLoading)
    return (
      <div className="flex flex-col xl:flex-row gap-x-10 py-10 gap-y-10">
        {/* Left Main Article Skeleton */}
        <div className=" xl:max-w-[65%] w-full space-y-5">
          <div className="w-full min-h-[29rem] bg-white/10 rounded-xl animate-pulse"></div>

          <div className="space-y-3 pt-3">
            <div className="w-3/4 h-6 bg-white/10 rounded animate-pulse"></div>
            <div className="w-full h-4 bg-white/10 rounded animate-pulse"></div>
            <div className="flex justify-between flex-wrap gap-2">
              <div className="w-1/3 h-3 bg-white/10 rounded animate-pulse"></div>
              <div className="w-1/4 h-3 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right Trending Articles Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-1 xl:max-w-[35%] w-full gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-row-reverse h-[10rem] md:h-[8rem] w-full gap-x-3 bg-[#32313156] rounded-xl"
            >
              <div className="max-w-[45%] w-full h-full bg-white/10 animate-pulse rounded-r-xl"></div>
              <div className="max-w-[55%] w-full p-3 space-y-2">
                <div className="w-full h-4 bg-white/10 rounded animate-pulse"></div>
                <div className="w-3/4 h-3 bg-white/10 rounded animate-pulse"></div>
                <div className="w-1/2 h-3 bg-white/10 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[20rem] gap-y-5 flex flex-col items-center justify-center">
        <MdError className="text-[4rem] text-red-600" />
        <h1 className="text-[2rem] text-red-600 font-bold">
          Error 404 Not Found
        </h1>
      </div>
    );

  return (
    <div
      className="flex flex-col xl:flex-row gap-x-10 py-10 gap-y-10"
      ref={containerRef}
    >
      {news?.[0] && (
        <div className="xl:max-w-[65%] w-full ">
          <div>
            <img
              src={news[0].trendingImage}
              alt={news[0].title}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-5 sm:space-y-3 pt-3 text-white">
            <h1 className="text-[2rem] font-bold">{news[0].title}</h1>
            <p className="">{news[0].short}</p>
            <div className="flex justify-between flex-wrap">
              <p className="text-xs ">
                <b className="text-purple-400">Author : </b>
                {news[0].author}
              </p>
              <p className="text-xs">
                <b className="text-purple-400">Date : </b>{" "}
                {new Date(news[0].date).toDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-1 xl:max-w-[35%] w-full gap-5">
        {news?.length > 1 &&
          news?.slice(1).map((article, index) => (
            <div
              key={index}
              className="flex flex-row-reverse h-[10rem] md:h-[8rem] w-full gap-x-3 bg-[#32313156] rounded-xl"
            >
              <div className="max-w-[45%] w-full h-full">
                <img
                  src={article.trendingImage}
                  alt={article.title}
                  className="w-full object-cover h-full rounded-r-xl "
                />
              </div>
              <div className="text-white max-w-[55%] w-full p-3 flex flex-col justify-between">
                <h1 className="md:line-clamp-2 text-sm font-medium">
                  {article.title}
                </h1>
                <div className="mt-5 space-y-2">
                  <p className="text-xs line-clamp-1">{article.author}</p>
                  <p className="text-xs line-clamp-1">
                    {new Date(article.date).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
