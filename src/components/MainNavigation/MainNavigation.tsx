import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon, Cog8ToothIcon, HomeIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'

const MainNavigation = () => {

  const menuItems = [
    { href: '/app/dashboard', icon: HomeIcon, text: 'Inicio' },
    { href: '/app/sales', icon: ArrowUpCircleIcon, text: 'Ingresos' },
    { href: '/app/expenses', icon: ArrowDownCircleIcon, text: 'Gastos' },
    { href: '/app/quotes', icon: DocumentChartBarIcon, text: 'Cotizaciones' },
    { href: '/app/contacts', icon: UserGroupIcon, text: 'Contactos' },
    { href: '/app/products', icon: CubeIcon, text: 'Productos' },
    { href: '/app/reports', icon: ChartBarIcon, text: 'Reportes' },
    { href: '/app/preferences/categories', icon: Cog8ToothIcon, text: 'Preferencias' },
  ]
  
  return (
    <nav className="mt-2 px-3">
      <ul>
        {
          menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href}>
                {<item.icon className='size-5'/>}
                {item.text}
              </MenuItem>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MainNavigation