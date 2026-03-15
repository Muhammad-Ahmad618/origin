import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function CustomDropDown({ options = [], onChange, style }) {
  const [state, setState] = useState({
    open: false,
    selected: 0,
    highlighted: 0,
  });

  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const update = (changes) => {
    setState((prev) => ({ ...prev, ...changes }));
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (
        !listRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        update({ open: false });
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  const selectItem = (index) => {
    update({ open: false, selected: index, highlighted: index });

    onChange?.(options[index]);
    buttonRef?.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!state.open && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      update({ open: true });
      return;
    }

    if (!state.open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      update({
        highlighted:
          state.highlighted === options.length - 1 ? 0 : state.highlighted + 1,
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      update({
        highlighted:
          state.highlighted === 0 ? options.length - 1 : state.highlighted - 1,
      });
    }

    if (e.key === "Enter") {
      e.preventDefault();
      selectItem(state.highlighted);
    }

    if (e.key === "Escape") {
      update({ open: false });
    }
  };

  return (
    <div className="relative space-y-1 z-10 cursor-pointer">
      <div
        className={`${
          style ?? "px-5"
        } h-[2rem] sm:h-[2.3rem] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-md flex items-center justify-center gap-x-3`}
        ref={buttonRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => update({ open: !state.open })}
        aria-haspopup="listbox"
        aria-expanded={state.open}
      >
        <span className="font-medium text-xs sm:text-sm text-white">
          {options[state.selected]}
        </span>
        <button>
          <FaAngleDown
            className={`text-white cursor-pointer transition-all duration-200 ${
              state.open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-black rounded-md absolute w-full p-2 ${
          state.open ? "block" : "hidden"
        } `}
      >
        <ul
          className="space-y-3 text-xs sm:text-sm font-medium"
          aria-haspopup="listbox"
          ref={listRef}
        >
          {options.map((option, index) => (
            <li
              key={option}
              role="option"
              aria-selected={state.selected === index}
              onMouseEnter={() => update({ highlighted: index })}
              onClick={() => selectItem(index)}
              className={` px-3 py-1.5 ${
                state.highlighted === index ? "bg-white/15" : ""
              }
                ${
                  state.selected === index ? "text-purple-400" : "text-white"
                } rounded-sm cursor-pointer`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomDropDown;
