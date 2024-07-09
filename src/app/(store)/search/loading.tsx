'use client'

import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from './current-search'
import { Suspense } from 'react'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => {
          return <Skeleton key={index} className="h-[400px]" />
        })}
      </div>
    </div>
  )
}
