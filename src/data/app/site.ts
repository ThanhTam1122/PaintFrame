export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://paint-yuki.vercel.app'
    : 'http://localhost:3000';

export const siteConfig = {
  name: 'Paint',
  title: 'Painting SPA',
  description: '絵画の詳細を表示するSPA.',
  author: {
    name: '栗山優希',
    url: 'https://yuki-portfolio-eight.vercel.app',
    github: 'https://github.com/kkyy0720',
    twitter: 'https://twitter.com/kuriyukijp',
  },
  keywords: [
    'react',
    'typescript',
    'boilerplate-template',
    'nextjs',
    'nextjs-boilerplate',
    'nextjs-starter',
    'nextjs-template',
    'nextjs14',
    'app-directory',
    'tailwindcss',
    'tailwindcss-starter-kit',
    'eslint',
    'prettier',
  ],
};
