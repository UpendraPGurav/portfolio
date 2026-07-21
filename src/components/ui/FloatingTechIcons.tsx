import { FaJava } from 'react-icons/fa';
import { SiDocker, SiMysql, SiReact, SiRedis, SiSpring, SiTailwindcss, SiTypescript } from 'react-icons/si';

const icons = [FaJava, SiSpring, SiReact, SiTypescript, SiTailwindcss, SiMysql, SiRedis, SiDocker];

const floaters = icons.map((Icon, id) => ({
  id,
  Icon,
  left: (id * 12.5 + Math.random() * 6) % 100,
  top: Math.random() * 100,
  size: Math.random() * 10 + 22,
  duration: Math.random() * 6 + 8,
  delay: Math.random() * 4,
}));

export function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floaters.map(({ id, Icon, left, top, size, duration, delay }) => (
        <Icon
          key={id}
          className="tech-float absolute text-blue-500/10 dark:text-blue-300/15"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            fontSize: size,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}
