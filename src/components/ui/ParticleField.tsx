const PARTICLE_COUNT = 24;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
  id,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 1.5,
  duration: Math.random() * 8 + 10,
  delay: Math.random() * 8,
}));

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-cyan-300/70 shadow-[0_0_6px_2px_rgba(34,211,238,0.5)] dark:bg-cyan-300/80"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
