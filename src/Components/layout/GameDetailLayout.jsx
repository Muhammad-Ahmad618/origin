import { useNavigate } from "react-router-dom";
import StarRating from "../ui/StarRating";
import EpicStyleSlider from "../Sliders/EpicStyleSlider";
import AddToCartBtn from "../custom/AddToCartBtn";
import useCartStore from "../../Store/CartStore";
import useWishlistStore from "../../Store/WishlistStore";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { SkeletonTheme } from "react-loading-skeleton";
import CustomButton from "../custom/CustomButton";
import { ErrorNotFound } from "../ui/ErrorNotFound";
import Skeleton from "react-loading-skeleton";
import { CustomToast } from "../custom/CustomToast";
import "react-loading-skeleton/dist/skeleton.css";

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
      <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
        <section className="min-h-screen max-w-screen-2xl mx-auto px-5 lg:px-24">
          <div className="pt-34">
            <div className="space-y-3 my-5">
              {/* Title */}
              <Skeleton height={40} width={300} />

              {/* Rating */}
              <div className="flex items-center gap-2">
                <Skeleton width={100} height={20} />
                <Skeleton width={40} />
                <Skeleton width={120} />
              </div>

              {/* Genres */}
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
              {/* MAIN */}
              <main className="hidden md:block basis-[65%] w-full">
                {/* Slider */}
                <Skeleton height={400} />

                {/* Description */}
                <div className="my-10 space-y-2">
                  <Skeleton count={5} />
                </div>

                {/* Requirements */}
                <div className="rounded-xl p-5 space-y-5">
                  <Skeleton width={200} height={25} />

                  <div className="flex gap-10">
                    {/* Minimum */}
                    <div className="space-y-3 w-full">
                      <Skeleton width={180} />
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <Skeleton key={i} height={15} />
                        ))}
                    </div>

                    {/* Recommended */}
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

              {/* SIDEBAR */}
              <aside className="basis-[35%] w-full space-y-5">
                {/* Image Card */}
                <div className="space-y-5 p-5 rounded-2xl">
                  <Skeleton height={200} />

                  <Skeleton width={100} height={25} />

                  <div className="space-y-4">
                    <Skeleton width={120} height={30} />

                    <Skeleton height={40} />
                    <Skeleton height={40} />
                  </div>
                </div>

                {/* Info Section */}
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

                {/* Tags */}
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
    <section className="min-h-screen max-w-screen-2xl mx-auto px-5 lg:px-24">
      <div className="pt-34">
        <div className="space-y-3 my-5 text-white">
          <h1 className="text-4xl font-black">{game?.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <StarRating rating={game?.rating} />
            <span className="font-medium">{game?.rating}</span>
            <span>({game?.reviews_count} Reviews)</span>
          </div>
          <div className="text-xs font-medium flex items-center gap-2 flex-wrap">
            {game?.genres?.map((item, index) => (
              <p key={index} className="py-2 px-4 bg-white/10 rounded-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex items-start gap-10 md:flex-row flex-col">
          <main className="hidden md:block basis-[65%] w-full overflow-hidden flex-shrink">
            <EpicStyleSlider media={game?.media} />
            <div className="text-white my-10">
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {game?.description_raw}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 items-center">
              <h3 className="text-white text-xl font-bold mb-5">
                Requirements
              </h3>
              <div className="flex items-start justify-between gap-10">
                <div className="space-y-5 w-full basis-[50%]">
                  <h3 className="text-white font-medium">
                    Minimum System Requirements
                  </h3>
                  <ul className="pl-5 space-y-2">
                    {min_req_bullet.length == 0 && (
                      <ul className="text-white text-sm leading-relaxed list-disc">
                        <li>
                          Minimum: Requires a 64-bit processor and operating
                          system
                        </li>
                        <li>OS: Windows 10</li>
                        <li>
                          Processor: Intel Core i5-6600K | AMD Ryzen 5 1600
                        </li>
                        <li>Memory: 16 GB RAM</li>
                        <li>
                          Graphics: NVIDIA GeForce GTX 1060, 6 GB | AMD Radeon
                          RX 590, 8 GB
                        </li>
                        <li>DirectX: Version 12</li>
                        <li>Storage: 50 GB available space</li>
                      </ul>
                    )}

                    {min_req_bullet?.map((item, index) => (
                      <li
                        className="text-xs font-medium leading-relaxed text-white list-disc"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5 w-full basis-[50%]">
                  <h3 className="text-white font-medium">
                    Recommended System Requirements
                  </h3>
                  <ul className="pl-5 space-y-2">
                    {rec_req_bullet.length == 0 && (
                      <ul className="text-white text-sm leading-relaxed list-disc">
                        <li>
                          Minimum: Requires a 64-bit processor and operating
                          system
                        </li>
                        <li>OS: Windows 10</li>
                        <li>
                          Processor: Intel Core i5-6600K | AMD Ryzen 5 1600
                        </li>
                        <li>Memory: 16 GB RAM</li>
                        <li>
                          Graphics: NVIDIA GeForce GTX 1060, 6 GB | AMD Radeon
                          RX 590, 8 GB
                        </li>
                        <li>DirectX: Version 12</li>
                        <li>Storage: 50 GB available space</li>
                      </ul>
                    )}

                    {rec_req_bullet?.map((item, index) => (
                      <li
                        className="text-xs font-medium leading-relaxed text-white list-disc"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
          <aside className="basis-[35%] flex-shrink-0 w-full md:w-auto">
            <div className="text-white space-y-5 bg-white/5 rounded-2xl p-5  ">
              <div className="relative group">
                <img
                  src={game?.background_image}
                  alt={game?.name}
                  className="aspect-[9/5] w-full object-cover object-top rounded-md"
                />
              </div>
              <span className="text-xs font-medium p-2 bg-white/10 rounded-lg">
                Base Game
              </span>
              <div className="mt-5 space-y-4">
                <h4 className="text-2xl font-bold">
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
                  icon={isInWishlist ? <FaRegCheckCircle /> : <FiPlusCircle />}
                  btnClick={handleToggleWishlist}
                  styling="w-full h-[2.6rem] bg-white/10 hover:bg-white/20 text-center rounded-md "
                />
              </div>
            </div>
            <div className="my-5 rounded-xl bg-white/5 p-5 space-y-4">
              <div className="flex items-start w-full border-b border-gray-600 pb-2 text-white justify-between gap-10">
                <p className="text-gray-400">Platform</p>
                <p className="font-medium text-end leading-relaxed">
                  {game?.platform}
                </p>
              </div>
              <div className="flex items-start w-full border-b border-gray-600 pb-2 text-white justify-between gap-10">
                <p className="text-gray-400">Publishers</p>
                <p className="font-medium text-end">{game?.publishers}</p>
              </div>
              <div className="flex items-start w-full border-b border-gray-600 pb-2 text-white justify-between gap-10">
                <p className="text-gray-400">Developers</p>
                <p className="font-medium text-end">{game?.developers}</p>
              </div>
              <div className="flex items-start w-full border-b border-gray-600 pb-2 text-white justify-between gap-10">
                <p className="text-gray-400">Release Date</p>
                <p className="font-medium text-end">{game?.release_date}</p>
              </div>
            </div>
            <div className="my-5 rounded-xl bg-white/5 p-5 space-y-4">
              <h1 className="text-white text-xl font-bold">Popular Tags</h1>
              <div className="flex flex-wrap gap-2">
                {game?.tags?.map((item, index) => (
                  <span
                    key={index}
                    className="text-[10px] md:text-xs font-medium p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-default text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:hidden bg-white/10 rounded-xl p-5 items-center">
              <h3 className="text-white text-xl font-bold mb-5">
                Requirements
              </h3>
              <div className="flex items-start justify-between gap-10">
                <div className="space-y-5 w-full basis-[50%]">
                  <h3 className="text-white font-medium">
                    Minimum System Requirements
                  </h3>
                  <ul className="pl-5 space-y-2">
                    {min_req_bullet.length == 0 && (
                      <ul className="text-white text-sm leading-relaxed list-disc">
                        <li>
                          Minimum: Requires a 64-bit processor and operating
                          system
                        </li>
                        <li>OS: Windows 10</li>
                        <li>
                          Processor: Intel Core i5-6600K | AMD Ryzen 5 1600
                        </li>
                        <li>Memory: 16 GB RAM</li>
                        <li>
                          Graphics: NVIDIA GeForce GTX 1060, 6 GB | AMD Radeon
                          RX 590, 8 GB
                        </li>
                        <li>DirectX: Version 12</li>
                        <li>Storage: 50 GB available space</li>
                      </ul>
                    )}

                    {min_req_bullet?.map((item, index) => (
                      <li
                        className="text-xs font-medium leading-relaxed text-white list-disc"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5 w-full basis-[50%]">
                  <h3 className="text-white font-medium">
                    Recommended System Requirements
                  </h3>
                  <ul className="pl-5 space-y-2">
                    {rec_req_bullet.length == 0 && (
                      <ul className="text-white text-sm leading-relaxed list-disc">
                        <li>
                          Minimum: Requires a 64-bit processor and operating
                          system
                        </li>
                        <li>OS: Windows 10</li>
                        <li>
                          Processor: Intel Core i5-6600K | AMD Ryzen 5 1600
                        </li>
                        <li>Memory: 16 GB RAM</li>
                        <li>
                          Graphics: NVIDIA GeForce GTX 1060, 6 GB | AMD Radeon
                          RX 590, 8 GB
                        </li>
                        <li>DirectX: Version 12</li>
                        <li>Storage: 50 GB available space</li>
                      </ul>
                    )}

                    {rec_req_bullet?.map((item, index) => (
                      <li
                        className="text-xs font-medium leading-relaxed text-white list-disc"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
