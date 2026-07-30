export function SocialBtn({ icon, label }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-[0.28rem] px-[0.6rem] py-[0.6rem] border border-white/8 rounded-[0.65rem] bg-white/4 cursor-pointer transition-all duration-[0.22s] ease flex-1 min-w-[3.2rem] hover:border-white/22 hover:bg-white/9 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
      title={label}
    >
      <span className="text-[1.2rem] flex items-center justify-center">
        {icon}
      </span>
      <span className="text-[0.58rem] text-[#64748b] font-semibold uppercase tracking-[0.04em]">
        {label}
      </span>
    </button>
  );
}
