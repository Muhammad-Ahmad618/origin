export function ToggleSwitch({ checked, onChange, label }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 text-left">
      <span className="text-sm font-medium text-gray-300 pr-4">{label}</span>
      <button
        onClick={onChange}
        type="button"
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 cursor-pointer outline-none ${
          checked
            ? "bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.5)]"
            : "bg-white/10"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
