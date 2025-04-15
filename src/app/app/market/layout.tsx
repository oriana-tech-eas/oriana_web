'use client'

import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Loading from "../Loading";
import Button from "@/components/Button/Button";
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon, Cog8ToothIcon, HomeIcon, DocumentChartBarIcon, ChatBubbleBottomCenterIcon, LifebuoyIcon } from '@heroicons/react/24/outline'
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { ContactsProvider } from "../_context/ContactsContext";
import SideNav from "@/components/Sidenav/Sidenav";
import { useTheme } from "next-themes";
import SideBarCollapseButton from "@/components/Sidenav/SideBarCollapseButton";
import { MARKET_BASE_URL } from "@/utils/constants";
import MainContentWrapper from "@/components/Layout/MainContent";
import MainTopBar from "@/components/Layout/MainTopBar";

interface LayoutProps {
  children: React.ReactNode
}

export default function MarketLayout({ children }: LayoutProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		const savedState = localStorage.getItem('SideNavCollapsed');
		if (savedState) {
			setCollapsed(savedState === 'true');
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('SideNavCollapsed', collapsed.toString());
	}, [collapsed]);

  // const { user } = useAuth({ middleware: 'auth' });

  // if (!user) {
  //   return <Loading />;
  // }

  const menuItems = [
    { href: `${MARKET_BASE_URL}/dashboard`, icon: HomeIcon, text: 'Inicio' },
    { href: `${MARKET_BASE_URL}/sales`, icon: ArrowUpCircleIcon, text: 'Ingresos' },
    { href: `${MARKET_BASE_URL}/expenses`, icon: ArrowDownCircleIcon, text: 'Gastos' },
    { href: `${MARKET_BASE_URL}/quotes`, icon: DocumentChartBarIcon, text: 'Cotizaciones' },
    { href: `${MARKET_BASE_URL}/contacts`, icon: UserGroupIcon, text: 'Contactos' },
    { href: `${MARKET_BASE_URL}/products`, icon: CubeIcon, text: 'Productos' },
    { href: `${MARKET_BASE_URL}/reports`, icon: ChartBarIcon, text: 'Reportes' },
    { href: `${MARKET_BASE_URL}/preferences/categories`, icon: Cog8ToothIcon, text: 'Preferencias' },
  ]

  const logoPath = isDark 
  ? "/brand/white/oriana-market.svg"
  : "/brand/oriana-market.svg"

  return (
    <ContactsProvider>
      <ToastProvider>
        <main className="flex flex-col md:flex-row">
          <SideNav
            collapsed={collapsed}
            baseUrl="/app/market/dashboard"
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
    </ContactsProvider>
  );
}