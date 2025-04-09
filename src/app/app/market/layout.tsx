'use client'

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import Loading from "../Loading";
import Button from "@/components/Button/Button";
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon, Cog8ToothIcon, HomeIcon, DocumentChartBarIcon, ChatBubbleBottomCenterIcon, LifebuoyIcon } from '@heroicons/react/24/outline'
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { ContactsProvider } from "../_context/ContactsContext";
import SideNav from "@/components/Sidenav/Sidenav";

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  // const { user } = useAuth({ middleware: 'auth' });

  // if (!user) {
  //   return <Loading />;
  // }

  const MARKET_BASE_URL = '/app/market'

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

  return (
    <ContactsProvider>
      <ToastProvider>
        <main className="flex flex-col md:flex-row">
          <SideNav
            baseUrl="/app/market/dashboard"
            logo="/brand/oriana-market.svg"
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
    </ContactsProvider>
  );
}