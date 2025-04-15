import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

interface SideBarCollapseButtonProps {
  toggleSidebar: Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
}

const SideBarCollapseButton = ({ toggleSidebar, collapsed }: SideBarCollapseButtonProps) => {
	return (
		<Tooltip
			placement='right'
			content={collapsed ? 'Expandir menu' : 'Colapsar menu'}
		>
			<button
				onClick={() => toggleSidebar(prev => !prev)}
				className='p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
				aria-label={collapsed ? 'Expandir menu' : 'Colapsar menu'}>
				{collapsed ? (
					<ChevronRightIcon className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
				) : (
					<ChevronLeftIcon className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
				)}
			</button>
		</Tooltip>
	);
};

export default SideBarCollapseButton;