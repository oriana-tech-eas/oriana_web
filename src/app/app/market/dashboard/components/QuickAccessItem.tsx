import Link from "next/link";

interface QuickAccessItem {
	href: string;
	icon: React.ReactNode;
	text: string;
}

const QuickAccessItem = ({ href, icon, text }: QuickAccessItem ) => {
	return (
		<Link href={href} className='flex flex-col items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover-bg-neutral-900 transition-colors bordered-component'>
			<span className='text-neutral-700 mb-2'>
				{icon}
			</span>
			<span className='text-sm'>
        {text}
      </span>
		</Link>
	);
};

export default QuickAccessItem;
