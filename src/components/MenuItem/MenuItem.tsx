'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '../Tooltip/Tooltip';

interface MenuItemProps {
  children: React.ReactNode,
  href: string,
  collapsed?: boolean,
}

const MenuItem = ({ children, href, collapsed = false }: MenuItemProps ) => {
  const pathname = usePathname()
  const activeClass = 'text-neutral-900 bg-neutral-100 hover:text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900 dark:hover:text-neutral-100';
  const inactiveClass = 'text-neutral-600 hover:bg-black/5 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300';
  
  const childrenArray = React.Children.toArray(children);
  const icon = childrenArray[0];
  const label = childrenArray[1];

  const itemContent = (
    <Link 
      href={href}
      className={`
        flex items-center rounded gap-1 py-2 ${collapsed ? 'justify-center px-1' : 'px-2'} duration-200 ease-in-out 
        ${pathname.includes(href) ? activeClass : inactiveClass}
      `}
    >
      {icon}
      {!collapsed && label}
    </Link>
  );

  if (collapsed && label) {
    return (
      <Tooltip content={label} placement="right">
        {itemContent}
      </Tooltip>
    );
  }

  return itemContent;
}

export default MenuItem