import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import type {
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
} from '@/types';

/**
 * ------------------------------------------------------------------
 * PERSONAL INFO — update everything in this block with your details.
 * ------------------------------------------------------------------
 */
export const personalInfo = {
  // TODO: confirm your full display name
  name: 'Upendra P Gurav',
  initials: 'UG',
  roles: [
    'Software Engineer',
    'Java Full Stack Developer',
    'Spring Boot + React Developer',
  ],
  tagline:
    'I build fast, secure, and scalable full-stack applications — from robust Spring Boot APIs to polished React interfaces.',
  location: 'Bengaluru, India', // TODO: update your location
  // TODO: replace with your real email address
  email: 'upendra.gurav28@gmail.com',
  // TODO: add your real phone number
  phone: '+91 7829340019',
  // TODO: replace with your GitHub profile URL
  githubUrl: 'https://github.com/UpendraPGurav',
  // TODO: replace with your LinkedIn profile URL
  linkedinUrl: 'https://linkedin.com/in/',
  // TODO: place your résumé PDF at /public/resume.pdf
  resumeUrl: '/resume.pdf',
  // TODO: place your professional photo at /public/profile.jpg and update Hero.tsx to use it
  profileImageUrl: '/profile.jpg',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: personalInfo.githubUrl, icon: FiGithub },
  { label: 'LinkedIn', href: personalInfo.linkedinUrl, icon: FiLinkedin },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: FiMail },
  { label: 'Phone', href: `tel:${personalInfo.phone}`, icon: FiPhone },
];

export const aboutSummary = [
  'I’m a Software Engineer specializing in Java and the Spring Boot ecosystem, with a strong command of React for building complete, production-grade full-stack products. I enjoy owning problems end-to-end — from designing normalized database schemas and secure REST APIs to shipping pixel-accurate, responsive interfaces.',
  'My core strength is backend engineering: designing clean microservice boundaries, implementing JWT-based authentication and Spring Security, and optimizing queries for performance at scale. On the frontend, I translate that same rigor into fast, accessible React applications with maintainable component architecture.',
  'I care about writing code that is easy to reason about, testable, and ready for production — not just code that works. I’m looking for teams that value engineering craftsmanship, ownership, and building software that solves real problems for real users.',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 80 },
      { name: 'JWT', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Associate Software Engineer',
    // TODO: update with your actual company name
    company: 'Sysfore Technologies Pvt. Ltd.',
    location: 'Bengaluru, India', // TODO: update location
    startDate: '2025', // TODO: update start date
    endDate: 'Present',
    responsibilities: [
      'Developed scalable backend APIs using Java and Spring Boot, powering core product features.',
      'Built responsive, accessible frontend interfaces with React and Tailwind CSS.',
      'Integrated REST APIs end-to-end between Spring Boot services and React clients.',
      'Implemented JWT-based authentication and role-based authorization with Spring Security.',
      'Optimized SQL queries and database schemas, improving response times on high-traffic endpoints.',
      'Diagnosed and resolved production bugs, improving application stability and reliability.',
      'Delivered new features end-to-end in an Agile/Scrum environment with sprint planning and code reviews.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description:
      'A full-stack streaming platform inspired by Netflix, featuring secure authentication, adaptive video streaming, and a complete admin dashboard for content management.',
    tech: ['Spring Boot', 'Angular', 'MySQL', 'JWT', 'Docker', 'Redis'],
    features: [
      'Authentication',
      'Video Streaming',
      'Admin Dashboard',
      'File Upload',
      'Search',
      'Responsive UI',
    ],
    featured: true,
    // TODO: add your project links
    githubUrl: 'https://github.com/UpendraPGurav/NetFlix#',
  },
  {
    id: 'bank-audit-management-system',
    title: 'Bank Audit Management System',
    description:
      'An enterprise audit management system for banking operations, streamlining audit workflows, approvals, and reporting with role-based access control.',
    tech: ['Spring Boot', 'Angular', 'MySQL', 'Microservices'],
    features: [
      'Audit Workflow',
      'Role-Based Authentication',
      'Report Generation',
      'Geo Mapping',
      'Dashboard',
      'Approval Workflow',
    ],
    featured: true,
    // TODO: add your project links
    // githubUrl: 'https://github.com/your-username/bank-audit-management-system',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'This personal portfolio — a premium, animated single-page site built with React, TypeScript, Tailwind CSS, and Framer Motion to showcase my work and experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive Design',
      'Dark/Light Theme',
      'Scroll Animations',
      'Glassmorphism UI',
    ],
    // TODO: add your live deployment link
    githubUrl: 'https://github.com/your-username/portfolio',
  },
];

export const education: EducationItem[] = [
    {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'New Horizon College of Engineering', // TODO: update institution name
    location: 'India', // TODO: update location
    // startDate: '2021', // TODO: update start date
    endDate: '2025', // TODO: update end date
  },
  {
    degree: "Bachelor's Degree (BSc)", // TODO: specify exact degree, e.g. "Bachelor of Computer Applications (BCA)"
    institution: 'Rani Chennamma University', // TODO: update institution name
    location: 'India', // TODO: update location
    // startDate: '2018', // TODO: update start date
    endDate: '2023', // TODO: update end date
  },

];
