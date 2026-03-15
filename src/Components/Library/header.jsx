import CustomDropDown from "../CustomDropDown/CustomDropDown";

export function LibraryHeader({ title }) {
  const options = ["All Games", "Installed", "Not Installed", "Favorite"];

  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between flex-wrap gap-5">
        <h1 className="text-[2rem] sm:text-[2.5rem] font-bold text-white">
          {title}
        </h1>
        <CustomDropDown options={options} style="w-[7rem] sm:w-[10rem]" />
      </div>
      <hr className="text-purple-500 mt-5" />
    </div>
  );
}
