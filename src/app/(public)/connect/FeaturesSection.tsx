export default function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">API Potente</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Optimice su documentación electrónica
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro servicio API simplifica la generación de documentos electrónicos aprobados por la DNIT para empresas en Paraguay.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  title: "Aprobada por la DNIT",
                  description: "Genere documentos 100% conformes con los requisitos y regulaciones de la DNIT en Paraguay.",
                  icon: "✓"
                },
                {
                  title: "Integración Sencilla",
                  description: "API REST simple que se integra con cualquier sistema o software existente.",
                  icon: "🔌"
                },
                {
                  title: "Validación en Tiempo Real",
                  description: "La validación instantánea asegura que todos los documentos generados cumplan con los estándares requeridos.",
                  icon: "⚡"
                },
                {
                  title: "Transmisión Segura",
                  description: "Transmisión de datos cifrada y almacenamiento seguro de documentos con seguimiento de cumplimiento.",
                  icon: "🔒"
                },
              ].map((feature, idx) => (
                <div key={idx} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600">
                    <span className="text-xl text-white">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}