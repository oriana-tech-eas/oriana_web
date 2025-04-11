import MainNavigation from '@/components/MainNavigation/MainNavigation';
import UserSubMenu from '@/components/MainNavigation/UserSubMenu';
import { MenuItemsProps } from '@/app/app/_shared/@types/menu';
import ProductSwitcher from './ProductSwitcher';
import CompanyLogo from './CompanyLogo';
import Image from 'next/image';

interface SideNavProps {
	collapsed: boolean;
	disableProducts?: boolean;
	disableCompanyLogo?: boolean;
	menuItems: MenuItemsProps[];
	baseUrl: string;
	logo: string;
	companyLogo?: string;
}


const SideNav = ({ collapsed, disableProducts = false, disableCompanyLogo = false, menuItems, baseUrl, logo, companyLogo }: SideNavProps) => {
	const OrianaLogo = collapsed ? '/brand/square/oriana-tech.svg' : '/brand/oriana-tech.svg'

	return (
		<aside
			className={`h-dvh flex flex-col justify-between bg-white border-r border-neutral-200 dark:border-neutral-700 sticky top-0 dark:bg-neutral-950 z-50 transition-all duration-300 ${
				collapsed ? 'w-16' : 'w-full md:w-72'
			}`}>
			<div>
				<div className='flex flex-col px-3 pt-4'>
					{/* Add Oriana logo if other elements are disabled */}
					{(disableCompanyLogo && disableProducts) && (
						<Image src={OrianaLogo} alt='Logo' width={110} height={60} className='mb-4' />
					)}

					{!disableProducts && (
						<ProductSwitcher
							currentLogo={logo}
							baseUrl={baseUrl}
							collapsed={collapsed}
						/>
					)}
					{!disableCompanyLogo && (
						<CompanyLogo
							collapsed={collapsed}
							companyLogo={companyLogo}
						/>
					)}
				</div>

				<MainNavigation menuItems={menuItems} collapsed={collapsed} />
			</div>

			<UserSubMenu collapsed={collapsed} />
		</aside>
	);
};

export default SideNav;
