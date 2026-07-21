import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="My professional journey building backend services and full-stack features."
        />

        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="absolute top-0 bottom-0 left-5 w-px bg-linear-to-b from-blue-500/60 via-blue-500/20 to-transparent sm:left-6" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.1}>
                <div className="relative pl-14 sm:pl-16">
                  <span className="absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 sm:h-12 sm:w-12">
                    <Briefcase size={18} />
                  </span>

                  <GlassCard hover={false} className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {item.company} &middot; {item.location}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
