import { useNavigate } from "react-router-dom";
import StarRating from "../../ui/StarRating";
import EpicStyleSlider from "../../Sliders/EpicStyleSlider";
import AddToCartBtn from "../../custom/AddToCartBtn";
import useCartStore from "../../../context/CartStore";
import useWishlistStore from "../../../context/WishlistStore";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { SkeletonTheme } from "react-loading-skeleton";
import { CustomButton } from "../../custom/CustomButton";
import { ErrorNotFound } from "../../ui/ErrorBanner";
import Skeleton from "react-loading-skeleton";
import { CustomToast } from "../../custom/CustomToast";
import "react-loading-skeleton/dist/skeleton.css";
import { RequirementsPanel } from "./requirementPanel";

export default function GameDetailLayout({ game, isLoading, error }) {
  const navigate = useNavigate();

  const isInCart = useCartStore((state) =>
    state.cart.some((item) => item.id === game?.id),
  );
  const addToCart = useCartStore((state) => state.addToCart);

  const isInWishlist = useWishlistStore((state) =>
    state.wishList.some((item) => item.id === game?.id),
  );
  const addToWishlist = useWishlistStore((state) => state.addToWishList);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishList,
  );

  const min_requirements = game?.min_requirements || "";
  const rec_requirements = game?.rec_requirements || "";

  const min_req_bullet = min_requirements
    .split(/(?=OS:|Processor:|Memory:|Graphics:|DirectX:|Network:|Storage:)/)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  const rec_req_bullet = rec_requirements
    .split(/(?=OS:|Processor:|Memory:|Graphics:|DirectX:|Network:|Storage:)/)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  const handleToggleWishlist = () => {
    if (!game) return;
    if (isInWishlist) {
      removeFromWishlist(game);
      CustomToast({
        title: "Removed from Wishlist",
        description: "Game successfully removed",
      });
    } else {
      addToWishlist(game);

      CustomToast({
        title: "Added to Wishlist",
        description: "Game successfully added",
      });
    }
  };

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#1a1230" highlightColor="#2d1b4e">
        <section className="min-h-screen max-w-screen-2xl mx-auto px-5 lg:px-24">
          <div className="pt-34">
            <div className="space-y-3 my-5">
              <Skeleton height={40} width={300} />
              <div className="flex items-center gap-2">
                <Skeleton width={100} height={20} />
                <Skeleton width={40} />
                <Skeleton width={120} />
              </div>
              <div className="flex gap-2 flex-wrap">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <Skeleton key={i} width={80} height={30} />
                  ))}
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex items-start gap-10 md:flex-row flex-col">
              <main className="hidden md:block basis-[65%] w-full">
                <Skeleton height={400} borderRadius={16} />
                <div className="my-10 space-y-2">
                  <Skeleton count={5} />
                </div>
                <div className="rounded-2xl p-5 space-y-5">
                  <Skeleton width={200} height={25} />
                  <div className="flex gap-10">
                    <div className="space-y-3 w-full">
                      <Skeleton width={180} />
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <Skeleton key={i} height={15} />
                        ))}
                    </div>
                    <div className="space-y-3 w-full">
                      <Skeleton width={220} />
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <Skeleton key={i} height={15} />
                        ))}
                    </div>
                  </div>
                </div>
              </main>

              <aside className="basis-[35%] w-full space-y-5">
                <div className="space-y-5 p-5 rounded-2xl">
                  <Skeleton height={200} borderRadius={12} />
                  <Skeleton width={100} height={25} />
                  <div className="space-y-4">
                    <Skeleton width={120} height={30} />
                    <Skeleton height={40} />
                    <Skeleton height={40} />
                  </div>
                </div>

                <div className="rounded-xl p-5 space-y-4">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton width={100} />
                        <Skeleton width={120} />
                      </div>
                    ))}
                </div>

                <div className="rounded-xl p-5 space-y-4">
                  <Skeleton width={150} height={25} />
                  <div className="flex flex-wrap gap-2">
                    {Array(6)
                      .fill()
                      .map((_, i) => (
                        <Skeleton key={i} width={70} height={25} />
                      ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </SkeletonTheme>
    );
  }

  if (error) {
    return <ErrorNotFound />;
  }

  const handleAddToCart = () => {
    if (game) {
      addToCart(game);
      setTimeout(() => {
        CustomToast({
          title: "Added to Cart",
          description: "Game successfully added",
        });
      }, 2000);
    }
  };

  return (
    <section className="relative min-h-screen max-w-screen-2xl mx-auto px-5 lg:px-24">
      {/* Ambient background glow, sits behind everything */}
      <div className="pointer-events-none fixed -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-purple-700/10 blur-[140px]" />
      <div className="pointer-events-none fixed top-96 right-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-700/5 blur-[140px]" />

      <div className="pt-34">
        <div className="space-y-4 my-5 text-white">
          <h1 className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-4xl font-black text-transparent">
            {game?.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <StarRating rating={game?.rating} />
            <span className="font-medium text-white">{game?.rating}</span>
            <span>({game?.reviews_count} Reviews)</span>
          </div>
          <div className="text-xs font-medium flex items-center gap-2 flex-wrap">
            {game?.genres?.map((item, index) => (
              <p
                key={index}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-purple-100 backdrop-blur transition-colors hover:border-purple-400/30 hover:bg-purple-500/10"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex items-start gap-10 md:flex-row flex-col">
          <main className="hidden md:block basis-[65%] w-full overflow-hidden flex-shrink">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-950/40">
              <EpicStyleSlider media={game?.media} />
            </div>

            <div className="text-white/80 my-10">
              <h3 className="mb-3 text-lg font-bold text-white">About</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {game?.description_raw}
              </p>
            </div>

            <RequirementsPanel
              minItems={min_req_bullet}
              recItems={rec_req_bullet}
            />
          </main>

          <aside className="basis-[35%] flex-shrink-0 w-full md:w-auto">
            {/* Purchase card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-purple-600/15 blur-[80px]" />

              <div className="relative space-y-5 text-white">
                <div className="relative group overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={game?.background_image}
                    alt={game?.name}
                    className="aspect-[9/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <span className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-purple-200">
                  Base Game
                </span>

                <div className="space-y-4">
                  <h4 className="bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-2xl font-bold text-transparent">
                    $ {game?.price || "0.00"}
                  </h4>
                  <AddToCartBtn
                    btnClick={handleAddToCart}
                    isInCart={isInCart}
                    Navigation={() => navigate("/store/cart")}
                    width="w-full"
                    height="h-[2.6rem]"
                  />
                  <CustomButton
                    label={
                      isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
                    }
                    icon={
                      isInWishlist ? <FaRegCheckCircle /> : <FiPlusCircle />
                    }
                    btnClick={handleToggleWishlist}
                    styling="w-full h-[2.6rem] border border-white/10 bg-white/[0.05] hover:bg-purple-500/15 hover:border-purple-400/30 text-center rounded-md transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Info card */}
            <div className="my-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              {[
                ["Platform", game?.platform],
                ["Publishers", game?.publishers],
                ["Developers", game?.developers],
                ["Release Date", game?.release_date],
              ].map(([label, value], i, arr) => (
                <div
                  key={label}
                  className={`flex items-start w-full justify-between gap-10 py-2.5 text-white ${
                    i < arr.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <p className="text-purple-300/70">{label}</p>
                  <p className="text-end font-medium leading-relaxed text-white/90">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags card */}
            <div className="my-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h1 className="text-xl font-bold text-white">Popular Tags</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {game?.tags?.map((item, index) => (
                  <span
                    key={index}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.04] p-2 px-3 text-[10px] font-medium text-white/80 backdrop-blur transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-100 md:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile requirements */}
            <RequirementsPanel
              minItems={min_req_bullet}
              recItems={rec_req_bullet}
              className="md:hidden"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
