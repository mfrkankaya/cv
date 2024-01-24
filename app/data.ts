export const RESUME_DATA = {
  name: 'Furkan Kaya',
  title: 'Frontend Developer',
  email: 'mfrkankaya@gmail.com',
  phone: process.env.PHONE_NUMBER || '',
  location: 'Tekirdağ, Turkey',
  summary: `Passionate Frontend Developer with over six years of expertise in web development, specializing in React, Next.js, TypeScript, Tailwind CSS, Prisma, and Figma for creating exceptional user experiences.`,
  work: [
    {
      company: 'Meditopia',
      link: 'https://meditopia.com/en/',
      title: 'Frontend Developer',
      start: '2021 Aug',
      end: 'Present',
      list: [
        'Created a Slack app with TypeScript, @slack/bolt, Express, and Prisma for some features of Meditopia.',
        'Collaborated on B2B dashboard using Next.js, Tailwind, @radix-ui, Zustand, Prisma, and TypeScript for a streamlined experience.',
        'Contributed to user-centric web app with Next.js, NextAuth, TypeScript, and styled-components for seamless, secure UX.',
        'Collaborated on UI Kit development using TypeScript and Styled-Components for consistent, visually appealing UI.',
        "Key role in Enuygun's Bus domain project development using React, Redux, Material UI, and SCSS for enhanced UX."
      ],
      forceNewPage: false
    },
    {
      company: 'Enuygun Wingie Group',
      link: 'https://enuygun.com/otobus-bileti/',
      title: 'Frontend Developer',
      start: '2020 Feb',
      end: '2021 Jul',
      list: [
        'I collaborated with my team to develop an UI Kit for our project, leveraging TypeScript and Styled-Components for a nice looking and consistent user interface.',
        "I played a key role in the continuous development of a production project in Enuygun's Bus domain using a technology stack that emphasizes React, Redux, Material UI and SCSS for an enhanced and seamless user experience."
      ],
      forceNewPage: false
    },
    {
      company: 'Doğuş Teknoloji',
      link: 'https://www.d-teknoloji.com.tr/',
      title: 'Frontend Developer',
      start: '2019 Jul',
      end: '2019 Sep',
      list: [],
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
