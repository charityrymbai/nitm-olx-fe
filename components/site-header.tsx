import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SiteHeader() {
  return (
    <header
      className="
    sticky top-0 z-50 w-full
    bg-gradient-to-r from-black via-gray-400 to-black
    shadow-2xl
    border-b border-white/90   
    p-4
    rounded-b-2xl
  "
    >
      <div className="container flex h-20 items-center justify-between gap-3 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-16 w-16 mb-2">
            <Image
              src="/nitm_logo.png"
              alt="Campus Marketplace Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden font-serif text-2xl font-bold sm:inline-block">
            Campus Marketplace
          </span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for anything..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex items-center gap-4 w1/2">
          <Link href="/post" className="hidden md:block">
            <Button className="font-mono gap-2 hover:-translate-y-1 hover:text-2xl transition-all duration-200 font-bold cursor-pointer ">
              SELL
            </Button>
          </Link>
          <Link href="/login" className="hidden md:block">
            <Button
              variant="outline"
              className="font-mono text-md font-bold hover:-translate-y-1 hover:p-5 hover:text-2xl transition-all duration-200 hover:border-3 cursor-pointer"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" className="hidden md:block">
            <Button className="font-mono text-md cursor-pointer hover:font-bold hover:-translate-y-1 hover:text-2xl transition-all duration-200">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
