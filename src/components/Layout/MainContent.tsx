const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="w-full bg-white dark:bg-neutral-950">
			{children}
		</section>
	);
};

export default MainContentWrapper;