

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Socials = {
  title: string
  description: string
  link: string
  id: string
  icon: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Zeneca',
    description:
      'Built an app that enables anyone to invest in US stocks and ETFs using stablecoins, buy fractional shares from $1 in less than 3-min.',
    link: 'https://www.zeneca.app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'zeneca',
  },
  {
    name: 'Fibbonacci Swap',
    description:
      'Fiat-to-crypto onramp/offramp powered by Chainlink and fintech APIs. Won a hackathon from BuidlGuidl in December 2023.',
    link: 'https://github.com/ialmanzaj/fibbonacci-swap',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const SOCIALS: Socials[] = [
  {
    title: 'X.com / Twitter',
    description: 'Documenting my journey on building apps and businesses',
    link: 'https://x.com/ialmanzaj',
    id: 'x',
    icon: '/x.svg',
  },
  {
    title: 'Instagram',
    description: 'Just for fun',
    link: 'https://www.instagram.com/isaac.developer',
    id: 'instagram',
    icon: '/instagram.svg',
  },
  {
    title: 'YouTube',
    description: 'Long form content and startup vlogs',
    link: 'https://www.youtube.com/@isaac.almanza',
    id: 'youtube',
    icon: '/youtube.svg',
  },
  {
    title: 'LinkedIn',
    description: 'My resume',
    link: 'https://www.linkedin.com/in/ialmanzaj',
    id: 'linkedin',
    icon: '/linkedin.svg',
  },

  {
    title: 'Github',
    description: 'Code repository for my hackathons, personal tools and experiments',
    link: 'https://www.github.com/ialmanzaj',
    id: 'github',
    icon: '/github.svg',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'High agency',
    description: 'one of the most important mental models I have learned',
    link: '/blog/high-agency',
    uid: 'high-agency',
  },
 
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ialmanzaj',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ialmanzaj',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ialmanzaj',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/isaac.developer',
  },
]

export const EMAIL = 'isaac@ialmanza.com'
