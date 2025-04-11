import { ChartBarIcon } from "@heroicons/react/24/outline";
import QuickAccessItem from "./QuickAccessItem";

const QuickAccess = () => {
	return (
		<div className='my-6'>
			<h2 className='text-lg font-bold mb-4'>Acceso Rápido</h2>

			<div className='grid grid-cols-2 gap-3'>
				<QuickAccessItem
					href='/app/market/reports'
					icon={<ChartBarIcon />}
					text='Reportes'
				/>
				<QuickAccessItem
					href='/app/market/contacts'
					icon={<ChartBarIcon />}
					text='Contactos'
				/>
				<QuickAccessItem
					href='/app/market/products'
					icon={<ChartBarIcon />}
					text='Productos'
				/>
				<QuickAccessItem
					href='/app/market/sales'
					icon={<ChartBarIcon />}
					text='Ventas'
				/>
			</div>
		</div>
	);
};

export default QuickAccess;