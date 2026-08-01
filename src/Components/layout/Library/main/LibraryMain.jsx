import { useEffect, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileDownloadOff, MdFileDownloadDone } from "react-icons/md";
import LibraryCards from "./LibraryCards";
import useLibraryStore from "../../../../context/libraryContext";
import { CustomBanner } from "../../../custom/CustomBanner";

export function LibraryMain({ filter = "All Games", setFilter }) {
  const library = useLibraryStore((state) => state.library);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter games based on selected filter option
  const filteredLibrary = library.filter((game) => {
    if (filter === "Installed") return game.installed;
    if (filter === "Not Installed") return !game.installed;
    if (filter === "Favorite") return game.favorite;
    return true; // All Games
  });

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <LibraryCards key={`skeleton-${index}`} isLoading={true} />
        ))}
      </div>
    );
  }

  // 1. Absolute Empty State: No games purchased at all
  if (library.length === 0) {
    return (
      <CustomBanner
        Icon={<IoGameControllerOutline />}
        title="No Games Found"
        description="  Your library is currently empty. Games will be added here
              automatically once they have been bought. Start exploring now!"
        button="Browse Store"
      />
    );
  }

  // 2. Filter Empty State: Games are in library, but none match the current filter
  if (filteredLibrary.length === 0) {
    let emptyTitle = "No Matches Found";
    let emptyDesc = "Try changing your filter settings to see your games.";
    let emptyIcon = <IoGameControllerOutline />;

    if (filter === "Favorite") {
      emptyTitle = "No Favorites Yet";
      emptyDesc =
        "Click the heart icon on any game card to mark it as a favorite.";
      emptyIcon = <FaRegHeart className="text-pink-400" />;
    } else if (filter === "Installed") {
      emptyTitle = "No Installed Games";
      emptyDesc =
        "You haven't installed any games. Click 'Install Game' on any card to begin.";
      emptyIcon = <MdOutlineFileDownloadOff className="text-purple-400" />;
    } else if (filter === "Not Installed") {
      emptyTitle = "All Games Installed";
      emptyDesc =
        "Nice job! Every game in your library is currently installed on this device.";
      emptyIcon = <MdFileDownloadDone className="text-[#e02ebf]" />;
    }

    return (
      <div className="w-full min-h-[30vh] flex flex-col items-center justify-center text-center py-10 px-4">
        <div className="max-w-sm w-full p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-4 mx-auto text-gray-400">
            {emptyIcon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{emptyTitle}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed px-2">
            {emptyDesc}
          </p>
          <button
            onClick={() => setFilter("All Games")}
            className="px-6 py-2 text-xs sm:text-sm font-semibold rounded-md border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Show All Games
          </button>
        </div>
      </div>
    );
  }

  // 3. Normal State: Render the games grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {filteredLibrary.map((game) => (
        <LibraryCards key={game.id} game={game} />
      ))}
    </div>
  );
}
