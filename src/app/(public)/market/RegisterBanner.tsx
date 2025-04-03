import Button from "@/components/Button/Button"

const RegisterBanner = () => {
  return (
    <section className="bg-gradient-to-r from-rose-700 to-orange-500 p-28 space-y-3 text-center">
      <h4 className="text-4xl font-bold text-white">¡Regístrate gratis hoy mismo!</h4>
      <p className="text-xl text-white">Disfruta de 30 días gratis con acceso a todas las funciones Pro. Sin compromisos.</p>
      <Button variant="white-outline" className="mx-auto inline-flex" href="/register">Prueba gratuita de 30 días</Button>
    </section>
  )
}

export default RegisterBanner;