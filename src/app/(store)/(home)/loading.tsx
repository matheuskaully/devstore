import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid-rows-6 grid h-full grid-cols-9 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[856px] w-full" />
      <Skeleton className="col-span-3 row-span-3 w-full" />
      <Skeleton className="col-span-3 row-span-3 w-full" />
    </div>
  )
}
