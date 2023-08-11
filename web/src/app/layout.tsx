import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SingIn'
import { Copyright } from '@/components/Copyright'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata: Metadata = {
  title: 'NWL Spacetime',
  description: 'A time capsule built on React, Next.js, TailwindCSS e TypeSricpt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has("token")

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>

      <main className="grid grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
          {/* Blur */}
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full">
            
          </div>

          {/* Stripes */}
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "/>

            {isAuthenticated? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />

          </div>

          {/* Right */}
          <div className="flex flex-col overflow-y-scroll max-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
        </div>
      </main>
      </body>
    </html>
  )
}
