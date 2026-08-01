import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function FloatingInput({
  id,
  type: initialType,
  label,
  icon,
  value,
  onChange,
  isRegister,
}) {
  const [focused, setFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const isPassword = initialType === "password";
  const type = isPassword && showPass ? "text" : initialType;

  return (
    <div className={`${isRegister ? "mb-[0.6rem]" : "mb-4"}`}>
      <div
        className={`flex items-center gap-[0.6rem] bg-white/4 border border-white/9 rounded-[0.75rem] px-[0.9rem] ${isRegister ? "h-[3rem]" : "h-[3.4rem]"} transition-all duration-[0.25s] ${focused || value ? "border-[rgba(139,92,246,0.65)] bg-[rgba(139,92,246,0.07)] shadow-[0_0_0_3px_rgba(139,92,246,0.14)]" : ""}`}
      >
        <span
          className={`text-[0.9rem] text-[#64748b] flex-shrink-0 flex items-center transition-colors duration-[0.25s] ${focused || value ? "text-[#a78bfa]" : ""}`}
        >
          {icon}
        </span>
        <div className="flex-1 relative h-full flex items-center">
          <label
            htmlFor={id}
            className={`absolute left-0 top-1/2 -translate-y-1/2 text-[0.75rem] text-[#64748b] pointer-events-none transition-all duration-[0.22s] ease ${focused || value ? "top-[5px] text-[#a78bfa] font-semibold tracking-[0.05em] uppercase translate-y-0" : ""}`}
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            className="w-full bg-transparent border-none outline-none text-[#f1f5f9] text-[0.875rem] pt-3 font-inherit"
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoComplete="off"
          />
        </div>
        {isPassword && (
          <button
            type="button"
            className="bg-transparent border-none text-[#64748b] cursor-pointer p-0 flex items-center text-[0.88rem] transition-colors duration-200 hover:text-[#a78bfa]"
            onClick={() => setShowPass((p) => !p)}
            tabIndex={-1}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}
