import { Reveal } from '@/components/ui/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = true }: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
        {eyebrow}
      </span>
      <h2
        className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
