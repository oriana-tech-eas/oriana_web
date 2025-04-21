import { ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import QuickAccessItem from "./QuickAccessItem";

const QuickAccess = () => {
	return (
		<div className='my-6'>
			<h2 className='text-lg font-bold mb-4'>Acceso Rápido</h2>

			<div className='grid grid-cols-2 gap-3'>
				<QuickAccessItem
					href='/app/market/reports'
					icon={<ChartBarIcon className="size-5" />}
					text='Reportes'
				/>
				<QuickAccessItem
					href='/app/market/contacts'
					icon={<UserGroupIcon className="size-5" />}
					text='Contactos'
				/>
				<QuickAccessItem
					href='/app/market/products'
					icon={<CubeIcon className="size-5" />}
					text='Productos'
				/>
				<QuickAccessItem
					href='/app/market/sales'
					icon={<ArrowUpCircleIcon className="size-5" />}
					text='Ventas'
				/>
			</div>
		</div>
	);
};

export default QuickAccess;