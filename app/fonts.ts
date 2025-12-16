import localFont from 'next/font/local'

export const myFont = localFont({
  src: [
    {
      path: '../public/fonts/MyFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-myfont', // optional (for Tailwind)
  display: 'swap',
})
