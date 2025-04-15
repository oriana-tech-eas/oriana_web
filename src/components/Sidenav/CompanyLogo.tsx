'use client';

import { useState } from 'react';
import LogoUploader from './LogoUploader';
import Image from 'next/image';
import { ArrowUpTrayIcon } from '@heroicons/react/16/solid';

export default function CompanyLogo({
	collapsed,
	companyLogo,
}: {
	collapsed?: boolean;
	companyLogo?: string;
}) {
	const [showLogoUploader, setShowLogoUploader] = useState(false);

	return (
		<>
			<div className='mt-6 mb-3 relative'>
				<div
					className={`${!companyLogo && 'border border-dashed dark:border-neutral-700'} rounded-md p-3 flex items-center justify-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors`}
					onClick={() => setShowLogoUploader(true)}>
					{companyLogo ? (
						<div className='relative w-full h-16 flex items-center justify-center'>
							<Image
								src={companyLogo}
								alt='Company Logo'
								width={120}
								height={40}
								className='max-h-14 object-contain'
							/>
							<div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity rounded-md flex items-center justify-center'>
								<span className='text-transparent hover:text-neutral-800 dark:hover:text-neutral-200 text-xs font-medium opacity-0 hover:opacity-100 transition-opacity'>
									Cambiar logo
								</span>
							</div>
						</div>
					) : (
						<div className='text-center'>
							<p className='text-neutral-500 dark:text-neutral-400 text-sm'>
								{collapsed ? <ArrowUpTrayIcon width={16} height={16} /> : 'Subí tu logo'}
							</p>
							{!collapsed && (
								<p className='text-neutral-400 dark:text-neutral-500 text-xs mt-1'>
									Haz clic para subir
								</p>
							)}
						</div>
					)}
				</div>
			</div>

			{showLogoUploader && (
				<LogoUploader
					currentLogo={companyLogo}
					onClose={() => setShowLogoUploader(false)}
				/>
			)}
		</>
	);
}
