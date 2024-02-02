export const RESUME_DATA = {
  name: 'Furkan Kaya',
  title: 'Frontend Developer',
  email: 'mfrkankaya@gmail.com',
  phone: process.env.PHONE_NUMBER || '',
  website: {
    label: 'fkaya.dev',
    href: 'https://fkaya.dev'
  },
  location: 'Tekirdağ, Turkey',
  summary: `Frontend Developer with over six years of expertise in web development, specializing in React, Next.js, TypeScript, Tailwind CSS, Prisma, and Figma for creating exceptional user experiences.`,
  work: [
    {
      company: 'Meditopia',
      link: 'https://meditopia.com/en/',
      title: 'Frontend Developer',
      start: '2021 Aug',
      end: 'Present',
      description:
        "Contributed to Meditopia's Web App, UI Kit, B2B Dashboard, Slack App, Surveys, Marketing pages and more. Technologies used: Next.js, Styled-Components, Tailwind, @radix-ui, React Query, Zustand, Prisma, SCSS and TypeScript.",
      forceNewPage: false
    },
    {
      company: 'Enuygun Wingie Group',
      link: 'https://enuygun.com/otobus-bileti/',
      title: 'Frontend Developer',
      start: '2020 Feb',
      end: '2021 Jul',
      description:
        "Contributed to Enuygun's Bus project and UI kit. Technologies used: React, Redux, Material UI, SCSS, Styled-Components and TypeScript.",
      forceNewPage: false
    },
    {
      company: 'Doğuş Teknoloji',
      link: 'https://www.d-teknoloji.com.tr/',
      title: 'Intern Frontend Developer',
      start: '2019 Jul',
      end: '2019 Sep',
      description: '',
      forceNewPage: false
    }
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React/Next.js',
    'React Native',
    'Tailwind CSS',
    'Styled Components',
    'Figma',
    'Node.js',
    'Express',
    'Nest.js'
  ],
  projects: [
    {
      title: 'Shadcn/UI Themes',
      techStack: ['Side Project', 'TypeScript', 'Next.js', 'Shadcn/UI'],
      description: 'A tool for generating themes for Shadcn/UI.',
      link: {
        label: 'themes.fkaya.dev',
        href: 'https://themes.fkaya.dev'
      }
    },
    {
      title: 'Hexuno',
      techStack: [
        'Side Project',
        'TypeScript',
        'Expo',
        'React Native',
        'Nativewind'
      ],
      description: 'An app for taking notes and copy/pasting fast.',
      link: {
        label: 'Hexuno App',
        href: 'https://github.com/mfrkankaya/hexuno-app'
      }
    },
    {
      title: 'Personal Website',
      techStack: ['TypeScript', 'Next.js', 'Shadcn/UI', 'Tailwind CSS'],
      description: 'My personal website.',
      link: {
        label: 'fkaya.dev',
        href: 'https://fkaya.dev'
      }
    }
  ],
  education: [
    {
      school: 'Namık Kemal University',
      degree: "Bachelor's Degree in Computer Engineering",
      start: '2014',
      end: '2022',
      forceNewPage: false
    }
  ]
} as const
