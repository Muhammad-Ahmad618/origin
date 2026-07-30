import { GiAtomicSlashes } from "react-icons/gi";

export default function VortexButton({ label, click, width }) {
  const baseStyle =
    "group flex items-center px-4 gap-x-2 py-2 bg-purple-600 rounded-sm text-white text-sm  font-semibold hover:bg-purple-500 lg:px-6 ";

  return (
    <>
      <button className={`${baseStyle} ${width}`} onClick={click}>
        <GiAtomicSlashes className="group-hover:text-white group-hover:rotate-180 ease-in duration-300 text-base min-[460px]:text-lg lg:text-xl text-white" />
        {label}
      </button>
    </>
  );
}
