import { useState } from "react";
import { LibraryMain } from "./main/LibraryMain.jsx";
import { LibraryHeader } from "./header.jsx";

export function Library() {
  const [filter, setFilter] = useState("All Games");

  return (
    <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-72px)]">
      <div className="pt-34 pb-14 px-5 lg:px-14 xl:px-24 space-y-10">
        <LibraryHeader title="My Library" onFilterChange={setFilter} />
        <LibraryMain filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}
