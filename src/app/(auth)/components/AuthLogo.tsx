import Image from 'next/image';
import Link from 'next/link';

const AuthLogo = () => {
	return (
		<div className='text-center mb-8'>
			<Link href={'/'} className='inline-block'>
				<Image
					src='/brand/oriana-tech.svg'
					alt='Oriana Tech Logo'
					width={160}
					height={48}
					priority
				/>
			</Link>
		</div>
	);
};

export default AuthLogo;
