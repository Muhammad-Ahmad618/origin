import { GiAtomicSlashes } from "react-icons/gi"

export default function VortexButton({label, click, type, width}) {
        
  const baseStyle = 'group flex items-center px-4 gap-x-2 py-2 bg-purple-600 rounded-md text-white text-xs lg:text-sm min-[460px]:rounded-lg font-semibold shadow-sm shadow-purple-400 hover:bg-purple-500 lg:px-6 2xl:text-base ';

  const Varient = 'group flex items-center transition-all duration-300 ease-in-out cursor-pointer m-auto text-sm justify-center gap-x-2 py-[0.5rem] bg-purple-700 text-white font-medium opacity-90 rounded-md font-semibold hover:opacity-100 ' 

  const AppliedStyle = type === 'varient' ? Varient : baseStyle 

  return (
    <>
     <button className={ `${AppliedStyle} ${width}`} onClick={click}>
            <GiAtomicSlashes className="group-hover:text-white group-hover:rotate-180 ease-in duration-300 text-base min-[460px]:text-lg lg:text-xl text-white" />
            {label}
          </button>
    </>
  )
}
