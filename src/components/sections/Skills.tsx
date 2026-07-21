import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { FloatingTechIcons } from '@/components/ui/FloatingTechIcons';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingTechIcons />
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks, and tools I use to build production software."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08}>
              <GlassCard hover={false} className="h-full p-6 sm:p-8">
                <h3 className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
                  {category.title}
                </h3>

                <div className="mt-6 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
