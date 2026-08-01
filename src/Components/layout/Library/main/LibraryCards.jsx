import { useState, useEffect } from "react";
import { MdFileDownload, MdFileDownloadDone } from "react-icons/md";
import { FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa";
import useLibraryStore from "../../../../context/libraryContext";

function LibraryCards({ game, isLoading }) {
  const toggleInstalled = useLibraryStore((state) => state.toggleInstalled);
  const toggleFavorite = useLibraryStore((state) => state.toggleFavorite);
  const [isInstalling, setIsInstalling] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isInstalling) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsInstalling(false);
            toggleInstalled(game.id);
            return 0;
          }
          return prev + 25; // 4 steps, takes 1.2s total
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isInstalling, game?.id, toggleInstalled]);

  if (isLoading) {
    return (
      <div className="group rounded-lg max-w-[20rem] w-full animate-pulse">
        <div className="w-full relative aspect-[7/9] bg-white/5 rounded-lg border border-white/5">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 rounded-lg"></div>
        </div>
        <div className="space-y-4 my-5">
          <div className="h-5 bg-white/10 rounded w-4/5"></div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-white/10 rounded-full"></div>
            <div className="h-3.5 bg-white/10 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  const title = game?.title || game?.name || "Unknown Game";
  const image = game?.background_image || game?.thumbnail;

  const handleInstallClick = (e) => {
    e.stopPropagation();
    if (game.installed) {
      toggleInstalled(game.id);
    } else if (!isInstalling) {
      setIsInstalling(true);
      setProgress(0);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(game.id);
  };

  return (
    <div className="group rounded-lg max-w-[20rem] w-full relative">
      <div className="w-full cursor-pointer relative overflow-hidden rounded-lg border border-white/10 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group-hover:-translate-y-1">
        <img
          src={image}
          alt={title}
          className="aspect-[7/9] object-cover w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Favorite heart button */}
        <button
          onClick={handleFavoriteClick}
          aria-label="Toggle Favorite"
          className="absolute top-3 right-3 rounded-full p-2 bg-black/60 backdrop-blur-md text-white hover:text-pink-500 transition-colors duration-200 shadow-md cursor-pointer"
        >
          {game.favorite ? (
            <FaHeart className="text-pink-500 text-sm sm:text-base animate-bounce-subtle" />
          ) : (
            <FaRegHeart className="text-white hover:text-pink-400 text-sm sm:text-base" />
          )}
        </button>
      </div>

      <div className="text-white space-y-3 my-4 px-1">
        <h3 className="text-base sm:text-lg font-bold group-hover:text-purple-400 cursor-pointer truncate transition-colors duration-200">
          {title}
        </h3>

        {/* Install / Play Status Row */}
        <button
          onClick={handleInstallClick}
          disabled={isInstalling}
          className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            isInstalling
              ? "text-purple-400"
              : game.installed
                ? "text-[#e02ebf] hover:text-[#ff4ce3]"
                : "text-gray-400 hover:text-white"
          }`}
        >
          {isInstalling ? (
            <>
              <FaSpinner className="animate-spin text-sm" />
              <span>Installing {progress}%</span>
            </>
          ) : game.installed ? (
            <>
              <MdFileDownloadDone className="text-base" />
              <span>Installed (Play)</span>
            </>
          ) : (
            <>
              <MdFileDownload className="text-base" />
              <span>Install Game</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default LibraryCards;
