import { useEffect, useState } from "react";
import LibraryCards from "./LibraryCards";
import { libraryData } from "./data";

export function LibraryMain() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <LibraryCards key={`skeleton-${index}`} isLoading={true} />
          ))
        : libraryData.map((game) => <LibraryCards key={game.id} game={game} />)}
    </div>
  );
}
