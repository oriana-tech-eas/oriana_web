import InputLabel from '@/components/InputLabel/InputLabel';
import { User } from '../../_shared/@types/user';

interface ExtraInformationProps {
	formData: { address: string };
	handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	user?: User;
}

export default function ExtraInformation({
	formData,
	handleInputChange,
	user,
}: ExtraInformationProps) {
	return (
		<div>
			<h2 className='text-lg font-medium mb-4'>Información Adicional</h2>

			<div className='space-y-4'>
				<div>
					<InputLabel htmlFor='address'>Dirección</InputLabel>
					<textarea
						id='address'
						name='address'
						value={formData.address}
						onChange={handleInputChange}
						rows={3}
						className='w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500'
					/>
				</div>

				<div>
					<InputLabel htmlFor='role'>
						Rol <span className='text-neutral-500'>(Solo lectura)</span>
					</InputLabel>
					<div className='w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-md text-neutral-500'>
						<span
							className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${getRoleBadgeColor(user?.role)}
                    `}>
							{user?.role || 'User'}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

const getRoleBadgeColor = (role?: string): string => {
	switch (role?.toLowerCase()) {
		case 'admin':
			return 'bg-purple-100 text-purple-800';
		case 'manager':
			return 'bg-blue-100 text-blue-800';
		case 'seller':
			return 'bg-green-100 text-green-800';
		default:
			return 'bg-neutral-100 text-neutral-800';
	}
};
