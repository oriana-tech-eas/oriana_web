'use client'

import React from 'react'
import { 
  CalendarDaysIcon, 
  UsersIcon, 
  Cog8ToothIcon, 
  UserGroupIcon, 
  HomeIcon, 
  ChatBubbleBottomCenterIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/Button/Button'
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch'
import SideNav from '@/components/Sidenav/Sidenav'
import { ToastProvider } from '@/components/Toast/ToastProvider'

interface LayoutProps {
  children: React.ReactNode
}

const BookingLayout = ({ children }: LayoutProps) => {
  const BOOKING_BASE_URL = '/app/booking'

  const menuItems = [
    { href: `${BOOKING_BASE_URL}/dashboard`, icon: HomeIcon, text: 'Inicio' },
    { href: `${BOOKING_BASE_URL}/appointments`, icon: CalendarDaysIcon, text: 'Citas' },
    { href: `${BOOKING_BASE_URL}/clients`, icon: UsersIcon, text: 'Clientes' },
    { href: `${BOOKING_BASE_URL}/services`, icon: Cog8ToothIcon, text: 'Servicios' },
    { href: `${BOOKING_BASE_URL}/staff`, icon: UserGroupIcon, text: 'Personal' },
  ]

  return (
    <ToastProvider>
      <main className="flex flex-col md:flex-row">
        <SideNav 
          baseUrl="/app/booking/dashboard"
          logo="/brand/oriana-booking.svg"
          menuItems={menuItems}
        />

        <section className="w-full bg-white dark:bg-neutral-950">
          <div className="bg-white dark:bg-neutral-950 z-40 border-b border:neutral-400 dark:border-neutral-700 px-6 py-3 flex gap-2 items-end justify-end sticky top-0">
            <ThemeSwitch />
            <Button href="/help" variant='secondary' size="sm" className='w-fit gap-1'>
              <ChatBubbleBottomCenterIcon className='size-5 text-neutral-500'/>
              Sugerencias
            </Button>
            <Button href="/help" variant='ghost-link' size="sm" className='w-fit gap-1'>
              Ayuda
              <LifebuoyIcon className='size-5'/>
            </Button>
          </div>
          <div className="px-6 py-8">
            {children}
          </div>
        </section>
      </main>
    </ToastProvider>
  )
}

export default BookingLayout