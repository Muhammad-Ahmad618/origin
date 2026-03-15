import { RxCross2 } from "react-icons/rx";
import CustomButton from "../custom/CustomButton";
import { useEffect } from "react";

export function AppDialogBox({ title, children, handleClick, setOpen, open }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={
        open
          ? "w-full min-h-screen bg-black/50 flex items-center justify-center absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="text-white max-w-[500px] w-full rounded-lg bg-white/10 backdrop-blur-md px-5">
        <div className="flex justify-between items-center py-4">
          <h5 className="font-semibold">{title}</h5>
          <span
            onClick={() => setOpen(false)}
            className="p-2 bg-black/10 rounded-md cursor-pointer hover:bg-black/20"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="bg-white/10 rounded-md h-[6rem] p-5">{children}</div>
        <div className="flex py-5 gap-3 justify-end items-center">
          <CustomButton
            label="Cancel"
            btnClick={() => setOpen(false)}
            styling="bg-white/10 rounded-lg border-2 border-white/10 py-2 hover:bg-white/20 "
          />
          <CustomButton label="Confirm" btnClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
