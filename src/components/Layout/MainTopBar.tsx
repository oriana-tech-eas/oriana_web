const MainTopBar = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="bg-white dark:bg-neutral-950 z-40 border-b border:neutral-400 dark:border-neutral-700 px-5 py-3 flex gap-2 items-end justify-between sticky top-0">
			{children}
		</section>
	);
};

export default MainTopBar;