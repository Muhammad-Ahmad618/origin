import { MdCheckCircle } from "react-icons/md";

const FALLBACK_REQUIREMENTS = [
  "Minimum: Requires a 64-bit processor and operating system",
  "OS: Windows 10",
  "Processor: Intel Core i5-6600K | AMD Ryzen 5 1600",
  "Memory: 16 GB RAM",
  "Graphics: NVIDIA GeForce GTX 1060, 6 GB | AMD Radeon RX 590, 8 GB",
  "DirectX: Version 12",
  "Storage: 50 GB available space",
];

function RequirementsList({ title, items }) {
  const list = items.length === 0 ? FALLBACK_REQUIREMENTS : items;
  return (
    <div className="w-full basis-[50%] space-y-4">
      <h3 className="text-sm font-semibold tracking-wide text-purple-200">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-xs font-medium leading-relaxed text-white/70"
          >
            <MdCheckCircle className="mt-0.5 shrink-0 text-sm text-purple-400/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RequirementsPanel({ minItems, recItems, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-purple-600/10 blur-[90px]" />
      <h3 className="relative mb-5 text-xl font-bold text-white">
        System Requirements
      </h3>
      <div className="relative flex items-start justify-between gap-10">
        <RequirementsList title="Minimum" items={minItems} />
        <div className="w-px self-stretch bg-white/10" />
        <RequirementsList title="Recommended" items={recItems} />
      </div>
    </div>
  );
}
