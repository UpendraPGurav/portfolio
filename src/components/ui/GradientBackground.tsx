export function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 animate-blob rounded-full bg-blue-600/30 blur-[100px]" />
      <div
        className="absolute top-1/3 -right-32 h-96 w-96 animate-blob rounded-full bg-cyan-500/20 blur-[100px]"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-blue-500/20 blur-[100px]"
        style={{ animationDelay: '6s' }}
      />
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
