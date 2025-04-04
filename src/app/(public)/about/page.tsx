import Button from "@/components/Button/Button";

export default function About() {
  return (
    <section className="container">
      <div className="py-28 mb-12 flex flex-col items-center justify-center w-full max-w-4xl space-y-4">
        <h1 className="title-3">Acerca de nosotros</h1>
        <Button href="/register" variant="primary">Crear cuenta gratis</Button>
      </div>

      <div className="flex flex-col w-full max-w-4xl space-y-4">
        <h2 className="text-4xl font-bold">¿Qué es esta aplicación?</h2>
        <p className="text-lg">
          Esta aplicación es un proyecto de código abierto que busca ayudar a las empresas a gestionar sus ventas de manera sencilla y eficiente.
        </p>
      </div>
    </section>
  )
}