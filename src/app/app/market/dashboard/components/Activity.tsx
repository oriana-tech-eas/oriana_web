import Button from "@/components/Button/Button";

const Activity = () => {
	return (
		<div className='p-5 bordered-component rounded-lg bg-neutral-100 dark:bg-neutral-900'>
			<h2 className='text-lg font-bold mb-4'>Actividad</h2>
			<div className='bordered-component p-4 rounded-lg bg-white dark:bg-neutral-800 mb-4'>
				<p className='bg-purple-100 dark:bg-purple-950 text-purple-700 inline-flex px-1 me-1 rounded'>
					@username
				</p>
				Te mencionó en un comentario
				<blockquote className='font-mono text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-2 text-sm mb-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod.
				</blockquote>
				<Button variant='secondary' size='sm' className='w-fit'>
					Ver documento
				</Button>
			</div>
		</div>
	);
};

export default Activity;