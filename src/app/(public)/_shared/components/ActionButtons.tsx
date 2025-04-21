import Button from "@/components/Button/Button";
import Link from "next/link";

export default function ActionButtons({ closeMenu, orientation }: { closeMenu: () => void, orientation: 'mobile' | 'desktop' }) {
  const loadClass = {
    mobile: 'block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-orange-700',
    desktop: 'ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700'
  }

	return (
		<>
			<Button
				variant='secondary'
				href="/login"
				onClick={closeMenu}>
				Iniciar Sesión
			</Button>
			<Link
				href="/register"
				className={`${loadClass[orientation]}`}
				onClick={closeMenu}>
				Registrarse
			</Link>
		</>
	);
}
