import { MdFileDownload } from "react-icons/md";

function LibraryCards({ game, isLoading }) {
  if (isLoading) {
    return (
      <div className="rounded-lg max-w-[20rem] w-full">
        <div className="w-full aspect-[7/9] animate-pulse bg-white/10 rounded-lg"></div>
        <div className="text-white space-y-4 my-5">
          <div className="h-6 w-3/4 bg-white/10 animate-pulse rounded"></div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/10 animate-pulse rounded-full"></div>
            <div className="h-4 w-1/4 bg-white/10 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group rounded-lg max-w-[20rem] w-full ">
      <div className="w-full cursor-pointer relative">
        <img
          src={game.thumbnail}
          alt="thumbnail"
          className="aspect-[7/9] object-cover w-full rounded-lg "
        />
        {game.favorite && (
          <div className="absolute top-2 right-2 rounded-full p-1">
            <span className="text-white text-xs bg-purple-800 font-medium px-2 py-1 rounded-full">
              Favorite
            </span>
          </div>
        )}
      </div>
      <div className="text-white space-y-4 my-5">
        <h3 className="text-base sm:text-lg font-semibold group-hover:text-purple-500 cursor-pointer">
          {game.title}
        </h3>
        <div
          className={`flex items-center gap-2 text-xs sm:text-sm ${
            game.installed ? "text-[#e02ebf]" : "text-white"
          }`}
        >
          <MdFileDownload />
          <span>{game.installed ? "Installed" : "Not Installed"}</span>
        </div>
      </div>
    </div>
  );
}

export default LibraryCards;
