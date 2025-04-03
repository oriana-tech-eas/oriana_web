import Button from "@/components/Button/Button"
import Image from "next/image"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-3 w-full border-b border-neutral-200 sticky top-0 bg-white/60 backdrop-blur-md z-50">
      <a href="/market" className="flex items-center gap-2">
        <Image src="/brand/oriana-market.svg" alt="Printit logo" width={120} height={28} />
      </a>
      <ul className="flex gap-4">
        <li>
          <a href="/market">Inicio</a>
        </li>
        <li>
          <a href="/market/about">Acerca de</a>
        </li>
        <li>
          <a href="/market/solutions">Soluciones</a>
        </li>
        <li>
          <a href="/">Ayuda</a>
        </li>
      </ul>
      <Button href="/login" variant="neutral">
        Iniciar sesión
      </Button>
    </nav>
  )
}

export default Navigation