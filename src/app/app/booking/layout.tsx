'use client'

import React, { useEffect, useState } from 'react'
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
import { useTheme } from 'next-themes'
import SideBarCollapseButton from '@/components/Sidenav/SideBarCollapseButton'
import { BOOKING_BASE_URL } from '@/utils/constants'
import MainTopBar from '@/components/Layout/MainTopBar'
import MainContentWrapper from '@/components/Layout/MainContent'
import { localStorageAdapter } from '@/utils/storageAdapter'

interface LayoutProps {
  children: React.ReactNode
}

const BookingLayout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const savedState = localStorageAdapter.getItem('SideNavCollapsed');
    if (savedState) {
      setCollapsed(savedState === 'true');
    }
  }, []);

  useEffect(() => {
    localStorageAdapter.setItem('SideNavCollapsed', collapsed.toString());
  }, [collapsed]);


  const menuItems = [
    { href: `${BOOKING_BASE_URL}/dashboard`, icon: HomeIcon, text: 'Inicio' },
    { href: `${BOOKING_BASE_URL}/appointments`, icon: CalendarDaysIcon, text: 'Citas' },
    { href: `${BOOKING_BASE_URL}/clients`, icon: UsersIcon, text: 'Clientes' },
    { href: `${BOOKING_BASE_URL}/services`, icon: Cog8ToothIcon, text: 'Servicios' },
    { href: `${BOOKING_BASE_URL}/staff`, icon: UserGroupIcon, text: 'Personal' },
  ]

  const logoPath = isDark 
  ? "/brand/white/oriana-booking.svg"
  : "/brand/oriana-booking.svg"

  return (
    <ToastProvider>
      <main className="flex flex-col md:flex-row">
        <SideNav 
          collapsed={collapsed}
          baseUrl="/app/booking/dashboard"
          logo={logoPath}
          menuItems={menuItems}
        />

        <MainContentWrapper>
          <MainTopBar>
            <SideBarCollapseButton collapsed={collapsed} toggleSidebar={setCollapsed} />
            
            <div className='flex gap-2 items-center'>
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
          </MainTopBar>
          <div className="px-6 py-8">
            {children}
          </div>
        </MainContentWrapper>
      </main>
    </ToastProvider>
  )
}

export default BookingLayout