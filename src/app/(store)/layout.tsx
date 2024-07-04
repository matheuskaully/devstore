import Header from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid-rows-app mx-auto grid min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
