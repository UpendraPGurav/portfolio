import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-50 h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
