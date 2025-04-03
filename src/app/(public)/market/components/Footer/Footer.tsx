const Footer = () => {
  return (
    <footer className="bg-neutral-50 pt-20 pb-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl font-bold">Nosotros</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/login">Inicio</a>
              </li>
              <li>
                <a href="/about">Acerca de</a>
              </li>
              <li>
                <a href="/solutions">Soluciones</a>
              </li>
              <li>
                <a href="/">Ayuda</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Contacto</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/login">Soporte</a>
              </li>
              <li>
                <a href="/register">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="/register">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 border-t pt-3 text-sm">
          <p className="text-neutral-600">© 2025 Oriana Tech E.A.S. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/terms">Términos y condiciones</a>
            <a href="/privacy">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer