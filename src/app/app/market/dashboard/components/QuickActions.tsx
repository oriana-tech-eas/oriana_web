import Button from "@/components/Button/Button";

const QuickActions = () => {
	return (
		<div className="my-5">
			<h2 className='text-lg font-bold mb-4'>Acciones</h2>
			<div className='flex flex-wrap gap-3'>
				<Button variant='secondary-market' className='w-full md:w-auto'>
					Nueva Venta
				</Button>
				<Button variant='secondary-market' className='w-full md:w-auto'>
					Nuevo Gasto
				</Button>
				<Button variant='secondary-market' className='w-full md:w-auto'>
					Nuevo Contacto
				</Button>
			</div>
		</div>
	);
};

export default QuickActions;
