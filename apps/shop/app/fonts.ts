import { Inter, Roboto_Mono } from 'next/font/google'

/**
 * @documentation https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts
 */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})
