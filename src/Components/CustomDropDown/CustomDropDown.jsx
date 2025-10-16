import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function CustomDropDown({ MenuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative space-y-1 ">
      <div className="h-[2.5rem] bg-black rounded-md flex items-center gap-x-3 w-full py-2 px-5">
        <span className="font-medium text-sm">{MenuItems.slice(0, 1)}</span>
        <button onClick={handleDropDown}>
          <FaAngleDown
            className={`text-white cursor-pointer transition-all duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-black rounded-md absolute w-full p-2 ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <ul className="space-y-3 text-sm font-medium">
          {MenuItems.slice(1, MenuItems.length).map((Items, index) => (
            <li
              key={index}
              className="px-3 py-1.5 hover:bg-white/10 rounded-sm cursor-pointer"
            >
              {Items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomDropDown;
