import Image from 'next/image'
import Link from 'next/link'
import CartWidget from './cart-widget'
import { SearchForm } from './search-form'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href={'/'}
          className="relative text-2xl font-extrabold text-white"
        >
          <span className="font-light text-violet-500">
            <span className="font-normal">&lt;</span>
            dev
          </span>
          <span>
            store <span className="font-normal">/&gt;</span>
          </span>
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="h-4 w-px bg-zinc-700" />

        <Link href={'/'} className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src={'https://github.com/matheuskaully.png'}
            alt="profile photo"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
