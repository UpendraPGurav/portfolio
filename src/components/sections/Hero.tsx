import { motion } from 'framer-motion';
import { ArrowRight, Download, User } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '@/data/portfolio';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { useTypewriter } from '@/hooks/useTypewriter';
import { Button } from '@/components/ui/Button';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { GridFloor } from '@/components/ui/GridFloor';
import { ParticleField } from '@/components/ui/ParticleField';

const quickLinks = [
  { label: 'GitHub', href: personalInfo.githubUrl, icon: FiGithub },
  { label: 'LinkedIn', href: personalInfo.linkedinUrl, icon: FiLinkedin },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: FiMail },
];

export function Hero() {
  const typedRole = useTypewriter(personalInfo.roles);
  const { ref: tiltRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTiltEffect({ max: 10 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <GradientBackground />
      <ParticleField />
      <GridFloor />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 shadow-[0_0_18px_rgba(34,211,238,0.15)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(34,211,238,0.7)]" />
            Available for new opportunities
          </span>

          <h1
            className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="mt-4 flex h-10 items-center text-xl font-semibold text-neutral-700 sm:text-2xl dark:text-neutral-300">
            <span className="mr-2 text-cyan-500 dark:text-cyan-400">&gt;</span>
            <span>{typedRole}</span>
            <span className="typing-cursor ml-1 inline-block h-[1.1em] w-[2px] bg-cyan-400" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* TODO: place resume.pdf in /public so this download works */}
            <Button as="a" href={personalInfo.resumeUrl} download variant="primary" icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button as="a" href="#contact" variant="secondary" icon={<ArrowRight size={16} />}>
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-neutral-600 transition-[border-color,box-shadow,color] duration-200 hover:border-cyan-400/50 hover:text-cyan-500 hover:shadow-[0_0_16px_rgba(34,211,238,0.35)] dark:text-neutral-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div
            className="absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-blue-500/30 via-cyan-400/20 to-blue-600/30 blur-2xl"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* TODO: replace this placeholder with your real photo at /public/profile.jpg */}
            <motion.div
              ref={tiltRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformPerspective: 900 }}
              className="glass relative aspect-square w-full overflow-hidden rounded-[2rem] border-2 border-blue-500/20"
            >
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/10 via-transparent to-cyan-400/10">
                <User size={120} strokeWidth={1} className="text-blue-500/40" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-4 text-center">
                <p className="text-sm font-medium text-white">Add your photo here</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
