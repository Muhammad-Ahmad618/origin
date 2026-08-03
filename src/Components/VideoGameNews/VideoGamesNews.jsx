import { useQuery } from "@tanstack/react-query";
import { FetchGameNews } from "../../api/News";
import { memo, useEffect, useRef, useState } from "react";
import { ErrorBanner } from "../ui/ErrorBanner";
import { MdOpenInNew } from "react-icons/md";

const FALLBACK_LARGE = "https://placehold.co/850x450?text=No+Image+Available";
const FALLBACK_SMALL = "https://placehold.co/400x250?text=No+Image+Available";

function TrendingArticle({ article }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative flex h-[10rem] w-full flex-row-reverse gap-x-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors duration-200 hover:border-purple-400/20 hover:bg-white/[0.05] md:h-[8rem]">
      <div className="relative h-full w-full max-w-[45%] overflow-hidden rounded-r-xl">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-purple-950/60" />
        )}
        <img
          src={article?.urlToImage || FALLBACK_SMALL}
          alt={article?.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_SMALL;
            setLoaded(true);
          }}
          className={`h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex w-full max-w-[55%] flex-col justify-between p-3 text-white">
        <h1
          className="cursor-pointer text-sm font-medium transition-colors hover:text-purple-300 md:line-clamp-2"
          onClick={() => window.open(article?.url, "_blank")}
        >
          {article?.title}
        </h1>
        <div className="mt-5 space-y-1">
          <p className="line-clamp-1 text-xs text-purple-200/50">
            {article?.author}
          </p>
          <p className="line-clamp-1 text-xs text-purple-200/50">
            {article?.publishedAt
              ? new Date(article.publishedAt).toDateString()
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

const MemoTrendingArticle = memo(TrendingArticle);

export default function VideoGamesNews({ limit }) {
  const {
    data: news,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["news", limit],
    queryFn: () => FetchGameNews(limit),
    enabled: false,
  });

  const containerRef = useRef(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

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
      { threshold: 0.1 }, // trigger when 10% visible
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

  if (error) return <ErrorBanner code={error?.response?.status || 503} />;

  return (
    <div
      className="flex flex-col xl:flex-row gap-x-10 py-10 gap-y-10"
      ref={containerRef}
    >
      {news?.[0] && (
        <div className="xl:max-w-[65%] w-full">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-950/40">
            {!heroLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-purple-950/60" />
            )}
            <img
              src={news[0]?.urlToImage || FALLBACK_LARGE}
              alt={news[0]?.title}
              loading="lazy"
              decoding="async"
              onLoad={() => setHeroLoaded(true)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FALLBACK_LARGE;
                setHeroLoaded(true);
              }}
              className={`w-full cursor-pointer object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                heroLoaded ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => window.open(news[0]?.url, "_blank")}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="space-y-5 sm:space-y-3 pt-3 text-white">
            <h1
              className="group flex cursor-pointer items-start gap-2 text-[2rem] font-bold transition-colors hover:text-purple-300"
              onClick={() => window.open(news[0]?.url, "_blank")}
            >
              <span>{news[0]?.title}</span>
              <MdOpenInNew className="mt-2 shrink-0 text-lg text-purple-400/60 opacity-0 transition-opacity group-hover:opacity-100" />
            </h1>
            <p className="text-white/70">{news[0]?.description}</p>
            <div className="flex justify-between flex-wrap gap-2 border-t border-white/10 pt-3">
              <p className="text-xs">
                <b className="text-purple-400">Author : </b>
                <span className="text-white/60">{news[0]?.author}</span>
              </p>
              <p className="text-xs">
                <b className="text-purple-400">Date : </b>
                <span className="text-white/60">
                  {news[0]?.publishedAt
                    ? new Date(news[0].publishedAt).toDateString()
                    : ""}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wrapper for the right column to handle relative positioning on XL screens */}
      <div className="w-full xl:w-[35%] xl:relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-1 w-full gap-5 xl:absolute xl:inset-0 xl:h-full xl:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {news?.length > 1 &&
            news
              .slice(1)
              .map((article, index) => (
                <MemoTrendingArticle
                  key={article?.url ?? index}
                  article={article}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
