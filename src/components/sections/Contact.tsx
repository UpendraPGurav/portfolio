import { type FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const contactMethods = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'View my repositories',
    href: personalInfo.githubUrl,
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedinUrl,
    icon: FiLinkedin,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have an opportunity or a project in mind? I'd love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="space-y-4">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <GlassCard className="flex items-center gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-500">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {value}
                      </span>
                    </span>
                  </GlassCard>
                </a>
              ))}

              <GlassCard hover={false} className="flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-500">
                    Location
                  </span>
                  <span className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {personalInfo.location}
                  </span>
                </span>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-blue-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-blue-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-blue-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" variant="primary" icon={<Send size={16} />} className="w-full">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
