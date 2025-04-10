import Avatar from "@/components/Avatar/Avatar";
import { PencilIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { User } from "@/app/app/_shared/@types/user";

interface ProfileImageUpdateProps {
  user: User,
  previewUrl: string | null,
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function ProfileImageUpdate({ user, previewUrl, handleImageChange }: ProfileImageUpdateProps) {
	return (
		<div className='mb-6'>
			<label className='block text-sm font-medium text-neutral-700 mb-2'>
				Foto de perfil
			</label>
			<div className='flex items-center space-x-6'>
				<div className='relative'>
					{previewUrl ? (
						<div className='w-24 h-24 rounded-full overflow-hidden border border-neutral-200'>
							<Image
								src={previewUrl}
								alt='Previsualización de la imagen'
								width={96}
								height={96}
								className='object-cover w-full h-full'
							/>
						</div>
					) : (
						<Avatar
							initials={user?.initials || ''}
							name={user?.name || ''}
							size='2xl'
						/>
					)}

					<button
						type='button'
						className='absolute bottom-0 right-0 bg-white rounded-full p-1 bordered-component hover:bg-neutral-50'
						onClick={() =>
							document.getElementById('profile-image-input')?.click()
						}>
						<PencilIcon className='w-5 h-5 text-neutral-500' />
					</button>
				</div>

				<div>
					<input
						id='profile-image-input'
						type='file'
						accept='image/*'
						className='hidden'
						onChange={handleImageChange}
					/>
					<Button
						type='button'
						variant="secondary-market"
						onClick={() =>
							document.getElementById('profile-image-input')?.click()
						}>
						Cambiar imagen
					</Button>
					<p className='text-xs text-neutral-500 mt-1'>
						JPEG, PNG or GIF (max. 5MB)
					</p>
				</div>
			</div>
		</div>
	);
}
