import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { MenuItemsProps } from '@/app/app/_shared/@types/menu'

const MainNavigation = ({ menuItems }: { menuItems: MenuItemsProps[]}) => {
  
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