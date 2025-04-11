'use client';

import React, { useEffect, useState } from 'react';
import MainNavigation from '@/components/MainNavigation/MainNavigation';
import UserSubMenu from '@/components/MainNavigation/UserSubMenu';
import { MenuItemsProps } from '@/app/app/_shared/@types/menu';
import ProductSwitcher from './ProductSwitcher';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import CompanyLogo from './CompanyLogo';

interface SideNavProps {
	menuItems: MenuItemsProps[];
	baseUrl: string;
	logo: string;
	companyLogo?: string;
}

const SideNav = ({ menuItems, baseUrl, logo, companyLogo }: SideNavProps) => {
	const [collapsed, setCollapsed] = useState(false);

	// Handle localStorage persistence
	useEffect(() => {
		// Load the collapsed state from localStorage on mount
		const savedState = localStorage.getItem('sidenavCollapsed');
		if (savedState) {
			setCollapsed(savedState === 'true');
		}
	}, []);

	// Update localStorage when collapsed state changes
	useEffect(() => {
		localStorage.setItem('sidenavCollapsed', collapsed.toString());
	}, [collapsed]);

	const toggleSidebar = () => {
		setCollapsed(!collapsed);
	};

	return (
		<aside
			className={`h-dvh flex flex-col justify-between bg-white border-r border-neutral-200 dark:border-neutral-700 sticky top-0 dark:bg-neutral-950 z-50 transition-all duration-300 ${
				collapsed ? 'w-20' : 'w-full md:w-72'
			}`}>
			<div>
				<div className='flex flex-col px-3 pt-4'>
					{/* Product switcher */}
					<ProductSwitcher
						currentLogo={logo}
						baseUrl={baseUrl}
						collapsed={collapsed}
					/>

					{/* Company logo with ability to upload */}
					<CompanyLogo
            collapsed={collapsed}
            companyLogo={companyLogo}
          />

					<button
						onClick={toggleSidebar}
						className='p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
						aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
						{collapsed ? (
							<ChevronRightIcon className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
						) : (
							<ChevronLeftIcon className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
						)}
					</button>
				</div>

				<MainNavigation menuItems={menuItems} collapsed={collapsed} />
			</div>

			<UserSubMenu collapsed={collapsed} />
		</aside>
	);
};

export default SideNav;
