import { MdError } from "react-icons/md";

export function ErrorNotFound() {
  return (
    <div className="min-h-[20rem] gap-y-5 flex flex-col items-center justify-center border-2 border-red-500 rounded-lg">
      <MdError className="text-[4rem] text-red-600" />
      <h1 className="text-[2rem] text-red-600 font-bold">
        Error 404 Not Found
      </h1>
    </div>
  );
}
