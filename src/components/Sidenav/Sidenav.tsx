'use client';

import React, { useState } from 'react';
import MainNavigation from '@/components/MainNavigation/MainNavigation';
import Image from 'next/image';
import UserSubMenu from '@/components/MainNavigation/UserSubMenu';
import { MenuItemsProps } from '@/app/app/_shared/@types/menu';
import ProductSwitcher from './ProductSwitcher';
import LogoUploader from './LogoUploader';

interface SideNavProps {
	menuItems: MenuItemsProps[];
	baseUrl: string;
	logo: string;
  companyLogo?: string;
}

const SideNav = ({ menuItems, baseUrl, logo, companyLogo }: SideNavProps) => {
  const [showLogoUploader, setShowLogoUploader] = useState(false);

	return (
		<aside className='h-dvh w-full flex flex-col justify-between md:w-72 bg-white border-r border-neutral-200 dark:border-neutral-700 sticky top-0 dark:bg-neutral-950 z-50'>
			     <div>
        <div className="flex flex-col px-3 pt-4">
          {/* Product switcher */}
          <ProductSwitcher currentLogo={logo} baseUrl={baseUrl} />
          
          {/* Company logo with ability to upload */}
          <div className="mt-6 mb-3 relative">
            <div 
              className="border border-dashed dark:border-neutral-700 rounded-md p-3 flex items-center justify-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              onClick={() => setShowLogoUploader(true)}
            >
              {companyLogo ? (
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={companyLogo}
                    alt="Company Logo"
                    width={120}
                    height={40}
                    className="max-h-14 object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity rounded-md flex items-center justify-center">
                    <span className="text-transparent hover:text-neutral-800 dark:hover:text-neutral-200 text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
                      Cambiar logo
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Sube el logo de tu empresa
                  </p>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
                    Haz clic para subir
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <MainNavigation menuItems={menuItems} />
      </div>
			
      <UserSubMenu />

      {showLogoUploader && (
        <LogoUploader 
          currentLogo={companyLogo} 
          onClose={() => setShowLogoUploader(false)} 
        />
      )}
		</aside>
	);
};

export default SideNav;
