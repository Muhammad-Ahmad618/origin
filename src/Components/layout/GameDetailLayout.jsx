import { useLocation } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import EpicStyleSlider from "../Sliders/EpicStyleSlider/EpicStyleSlider";

export default function GameDetailLayout({ game, isLoading, error }) {
  const location = useLocation();

  return (
    <section className="min-h-screen max-w-screen-2xl mx-auto px-5 lg:px-24">
      <div className="pt-34">
        <div className="space-y-3 my-5 text-white">
          <h1 className="text-4xl font-black">{game?.name}</h1>
          <div className="flex items-center gap-2">
            <StarRating rating={game?.rating} />
            <span className="text-sm font-medium">{game?.rating}</span>
          </div>
          <span className="text-xs font-medium flex items-center gap-2">
            {game?.genres.map((item) => (
              <p className="py-2 px-4 bg-white/10 rounded-sm">{item}</p>
            ))}
          </span>
        </div>
      </div>

      <div className="py-5">
        <div className="flex items-start gap-5 md:flex-row flex-col">
          <main className="hidden md:block basis-[65%] w-full overflow-hidden flex-shrink">
            <EpicStyleSlider media={game?.media} />
          </main>
          <aside className="basis-[35%] bg-white/5 p-5 rounded-lg flex-shrink-0">
            <div className="text-white space-y-3">
              <img
                src={game?.background}
                alt={game?.name}
                className="aspect-[9/5] object-cover object-top rounded-md"
              />
              <p className="text-sm">{game?.description}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
