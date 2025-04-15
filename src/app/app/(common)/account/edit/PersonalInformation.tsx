import InputLabel from "@/components/InputLabel/InputLabel";
import Input from "@/components/Input/Input";
import { User } from "@/app/app/_shared/@types/user";

interface PersonalInformationProps {
  formData: { name: string; username: string, address: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user?: User;
}

export default function PersonalInformation({
  formData,
  handleInputChange,
  user,
}: PersonalInformationProps) {
	return (
		<div>
			<h2 className='text-lg font-medium mb-4'>Información Personal</h2>

			<div className='space-y-4'>
				<div>
					<InputLabel htmlFor='name'>Nombre</InputLabel>
					<Input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<InputLabel htmlFor='username'>usuario</InputLabel>
					<div className='relative'>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500'>
							@
						</span>
						<input
							type='text'
							id='username'
							name='username'
							value={formData.username}
							onChange={handleInputChange}
							className='w-full pl-8 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500'
							required
						/>
					</div>
				</div>

				<div>
					<InputLabel htmlFor='email'>
						Email <span className='text-neutral-500'>(Solo lectura)</span>
					</InputLabel>
					<Input
						type='email'
						id='email'
						value={user?.email || ''}
						disabled
						readOnly
					/>
				</div>
			</div>
		</div>
	);
}
