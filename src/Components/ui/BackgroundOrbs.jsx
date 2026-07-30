export function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full blur-[80px] animate-orbFloat w-[520px] h-[520px] bg-[radial-gradient(circle,#7c3aed,#4c1d95)] -top-[160px] -left-[160px] opacity-[0.35]"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute rounded-full blur-[80px] animate-orbFloat w-[380px] h-[380px] bg-[radial-gradient(circle,#a855f7,#6d28d9)] -bottom-[100px] -right-[100px] opacity-[0.3]"
        style={{ animationDelay: "-3s", animationDuration: "12s" }}
      />
      <div
        className="absolute rounded-full blur-[80px] animate-orbFloat w-[250px] h-[250px] bg-[radial-gradient(circle,#ec4899,#7c3aed)] top-[40%] left-[30%] opacity-[0.15]"
        style={{ animationDelay: "-6s", animationDuration: "9s" }}
      />
      <div
        className="absolute rounded-full blur-[80px] animate-orbFloat w-[180px] h-[180px] bg-[radial-gradient(circle,#06b6d4,#3b82f6)] top-[10%] right-[20%] opacity-[0.12]"
        style={{ animationDelay: "-2s", animationDuration: "14s" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
