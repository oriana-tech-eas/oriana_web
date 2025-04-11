'use client'

import { ToastProvider } from '@/components/Toast/ToastProvider'
import SideNav from '@/components/Sidenav/Sidenav'
import { BuildingOfficeIcon, HomeIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import MainContentWrapper from '@/components/Layout/MainContent'
import MainTopBar from '@/components/Layout/MainTopBar'
import SideBarCollapseButton from '@/components/Sidenav/SideBarCollapseButton'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const SharedLayout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ToastProvider>
      <main className="flex flex-col md:flex-row">
        <SideNav 
          collapsed={collapsed}
          disableCompanyLogo={true}
          disableProducts={true}
          baseUrl="/app/market/dashboard"
          logo="/brand/oriana-market.svg"
          menuItems={[
            { href: '/app/market/dashboard', icon: HomeIcon, text: 'Inicio' },
            { href: '/app/account', icon: UserCircleIcon, text: 'Cuenta' },
            { href: '/app/company', icon: BuildingOfficeIcon, text: 'Empresa' },
            { href: '/app/products', icon: Squares2X2Icon, text: 'Productos' },
          ]}
        />
        <MainContentWrapper>
          <MainTopBar>
            <SideBarCollapseButton collapsed={collapsed} toggleSidebar={setCollapsed} />

          </MainTopBar>
          <div className="px-6 py-8">
            {children}
          </div>
        </MainContentWrapper>
      
      </main>
    </ToastProvider>
  )
}

export default SharedLayout