export function GridFloor() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-72 overflow-hidden opacity-0 transition-opacity duration-500 [perspective:400px] dark:opacity-100"
      aria-hidden="true"
    >
      <div className="grid-floor absolute inset-0 origin-bottom [transform:rotateX(75deg)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  );
}
