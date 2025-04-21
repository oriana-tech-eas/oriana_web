import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuItemsProps } from '@/app/app/_shared/@types/menu';

interface MainNavigationProps {
	menuItems: MenuItemsProps[];
	collapsed?: boolean;
}

const MainNavigation = ({
	menuItems,
	collapsed = false,
}: MainNavigationProps) => {
	return (
		<nav className={`mt-2 ${collapsed ? 'px-2' : 'px-3'}`}>
			<ul>
				{menuItems.map((item, index) => (
					<li key={index}>
						<MenuItem href={item.href} collapsed={collapsed}>
							{<item.icon className='size-5' />}
							{item.text}
						</MenuItem>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MainNavigation;
