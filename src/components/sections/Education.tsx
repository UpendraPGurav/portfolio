import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.1}>
              <GlassCard className="h-full p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <GraduationCap size={22} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                  {item.location}
                </p>
                <span className="mt-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                  {item.endDate}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
