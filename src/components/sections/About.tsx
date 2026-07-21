import { Code2, Database, Layers, ShieldCheck } from 'lucide-react';
import { aboutSummary } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end ownership from React UI to Spring Boot services.',
  },
  {
    icon: Layers,
    title: 'Microservices',
    description: 'Designing decoupled, scalable service architectures.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Security',
    description: 'JWT, Spring Security, and role-based access control.',
  },
  {
    icon: Database,
    title: 'Backend Engineering',
    description: 'Optimized REST APIs and database design at scale.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Backend-focused engineer who ships complete products"
          description="A summary of how I think about engineering, and what I bring to a team."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            {aboutSummary.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <GlassCard className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                    {description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
