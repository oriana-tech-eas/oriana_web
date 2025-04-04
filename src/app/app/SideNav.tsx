import React from 'react'
import MainNavigation from '@/components/MainNavigation/MainNavigation'
import Image from 'next/image'
import Link from 'next/link'
import UserSubMenu from '@/components/MainNavigation/UserSubMenu'

const SideNav = () => {

  return (
    <aside className="h-dvh w-full flex flex-col justify-between md:w-72 bg-white border-r border-neutral-200 dark:border-neutral-700 sticky top-0 dark:bg-neutral-950 z-50">
      <div>
        <Link href={'/app/dashboard'}>
          <Image 
            className="flex mt-5 ml-4 mb-6"
            src="/brand/oriana-market.svg"
            width={100} 
            height={50} 
            alt="Printit Logo"
            priority  
          /> 
        </Link>
        <MainNavigation/>
      </div>
      <UserSubMenu />
    </aside>
  )
}

export default SideNav