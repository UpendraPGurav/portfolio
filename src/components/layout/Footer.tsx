import { personalInfo, socialLinks } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p
            className="text-lg font-bold text-neutral-900 dark:text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Software Engineer &middot; Java Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-blue-500/10 hover:text-blue-500 dark:text-neutral-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>

      <Container className="mt-8 border-t border-black/5 pt-6 dark:border-white/10">
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-500">
          &copy; {year} {personalInfo.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
