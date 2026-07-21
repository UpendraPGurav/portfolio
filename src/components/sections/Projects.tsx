import { ExternalLink, Folder } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { projects } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of full-stack projects showcasing backend depth and polished frontend delivery."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1} className={project.featured ? 'lg:col-span-1' : ''}>
              <GlassCard tilt className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Folder size={22} />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-blue-500/10 hover:text-blue-500 dark:text-neutral-400"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-blue-500/10 hover:text-blue-500 dark:text-neutral-400"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-6 border-t border-black/5 pt-5 dark:border-white/10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-500">
                    Key Features
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
