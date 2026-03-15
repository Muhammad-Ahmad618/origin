import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating, max = 5 }) {
  const safeRating =
    typeof rating === "number" && rating > 0 ? Math.min(rating, max) : 0;

  const fullstars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5;
  const emptyStars = max - fullstars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-amber-400 text-sm">
      {/* Full stars */}
      {[...Array(fullstars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}

      {halfStar && <FaStarHalfAlt />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
}

export default StarRating;
