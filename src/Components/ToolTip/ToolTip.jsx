export function ToolTip({ label }) {
  return (
    <div className="px-3 py-1 absolute bg-purple-700 rounded-md top-2 right-12">
      <span className="text-white text-xs ">{label}</span>
    </div>
  );
}
