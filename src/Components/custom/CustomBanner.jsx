import { useNavigate } from "react-router-dom";

export function CustomBanner({ Icon, title, description, button }) {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center py-10 px-4">
      <div className=" w-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
        {/* Subtle background glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl group-hover:bg-pink-600/30 transition-all duration-500" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Glowing Icon Badge */}
          <div className="w-20 h-20 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-4xl mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-pulse">
            {Icon}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-wide">
            {title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 px-4">
            {description}
          </p>

          <button
            onClick={() => navigate("/store")}
            className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm sm:text-base font-medium"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
