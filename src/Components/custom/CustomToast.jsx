import toast from "react-hot-toast";

export function CustomToast({ title, description }) {
  return (
    <>
      {toast.custom((t) => (
        <div
          className={`flex items-center gap-3 mt-20 bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-lg border border-white/10 max-w-[300px] w-full ${
            t.visible
              ? "animate-in fade-in slide-in-from-top-2"
              : "animate-out fade-out"
          }`}
        >
          <span className="text-purple-500">✔</span>
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
