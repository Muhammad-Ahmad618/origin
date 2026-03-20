import { LibraryMain } from "./main/LibraryMain.jsx";
import { LibraryHeader } from "./header.jsx";

export function Library() {
  return (
    <div className="max-w-screen-2xl mx-auto h-[calc(100vh-72px)]">
      <div className="py-34 px-5 lg:px-14 xl:px-24 space-y-10">
        <LibraryHeader title="My Library" />
        <LibraryMain />
      </div>
    </div>
  );
}
