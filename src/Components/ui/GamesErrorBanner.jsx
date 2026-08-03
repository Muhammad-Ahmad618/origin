import { MdErrorOutline, MdRefresh } from "react-icons/md";

export function GamesErrorBanner({ title, refetch }) {
  return (
    <div className="relative flex min-h-[16rem] flex-col items-center justify-center gap-y-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
      <div className="pointer-events-none absolute -top-16 -left-16 h-52 w-52 rounded-full bg-purple-600/15 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-fuchsia-600/10 blur-[80px]" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/20 bg-purple-950/40">
        <MdErrorOutline className="text-2xl text-purple-300" />
      </div>

      <div className="relative space-y-1">
        <h4 className="text-base font-semibold text-white">
          Couldn't load {title || "this section"}
        </h4>
        <p className="max-w-sm text-sm text-purple-100/50">
          Something went wrong while fetching these games. Give it another try.
        </p>
      </div>

      <button
        onClick={() => refetch()}
        className="relative inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-white/[0.03] px-4 py-2 text-sm font-medium text-purple-100 outline-none transition-all hover:border-purple-400/40 hover:bg-white/[0.08] hover:text-purple-200 focus-visible:ring-2 focus-visible:ring-purple-300"
      >
        <MdRefresh />
        Try Again
      </button>
    </div>
  );
}
