'use client'
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) => {
  const baseClass = 'px-2 py-2 rounded-lg text-neutral-500 dark:text-neutral-400 cursor-pointer duration-200 hover:text-neutral-700 duration-200 ease-in-out'
  const activeClass = 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'
  return (
    <Link href={href} className={
      `${baseClass} ${active && activeClass}`
    }>
      {children}
    </Link>
  )
}

const PreferencesLayout = ({ children }: { children: React.ReactNode}) => {
  const pathname = usePathname()

  return (
    <Container>
      <div className='flex gap-2 items-center justify-between'>
          <PageTitle>Preferencias</PageTitle>
      </div>
      <nav className="flex gap-2 my-10">
        <CustomLink active={pathname.includes('categories')} href="/preferences/categories">Categorias</CustomLink>
        <CustomLink active={pathname.includes('taxes')} href="/preferences/taxes">Impuestos</CustomLink>
        <CustomLink active={pathname.includes('documents')} href="/preferences/documents">Documentos</CustomLink>
        <CustomLink active={pathname.includes('users')} href="/preferences/users">Usuarios</CustomLink>
      </nav>
      {children}
    </Container>
  );
}

export default PreferencesLayout;