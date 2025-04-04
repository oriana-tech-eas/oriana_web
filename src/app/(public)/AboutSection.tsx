import { CloudIcon, LifebuoyIcon, MapPinIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function AboutSection() {
  const features = [
    {
      title: "Diseñado para Paraguay",
      description: "Nuestro software está adaptado a los requisitos empresariales paraguayos, incluyendo el cumplimiento con la DNIT y las regulaciones fiscales locales.",
      icon: (
        <MapPinIcon className="w-6 h-6 text-orange-50" />
      )
    },
    {
      title: "Enfoque Modular",
      description: "Elija las aplicaciones que necesita ahora y añada más a medida que su empresa crece. Todos nuestros productos funcionan perfectamente integrados.",
      icon: (
        <Square3Stack3DIcon className="w-6 h-6 text-orange-50" />
      )
    },
    {
      title: "SaaS Basado en la Nube",
      description: "Acceda a sus herramientas de negocio desde cualquier lugar, en cualquier dispositivo, sin instalaciones complicadas ni mantenimiento.",
      icon: (
        <CloudIcon className="w-6 h-6 text-orange-50" />
      )
    },
    {
      title: "Soporte Dedicado",
      description: "Nuestro equipo local proporciona soporte personalizado para asegurar que su empresa obtenga el máximo provecho de nuestras soluciones.",
      icon: (
        <LifebuoyIcon className="w-6 h-6 text-orange-50" />
      )
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Acerca de Oriana</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Diseñado para crecer con su empresa
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oriana ofrece una suite de aplicaciones empresariales interconectadas diseñadas para simplificar sus operaciones. Nuestro enfoque modular le permite comenzar con lo que necesita y expandirse a medida que su empresa crece.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, idx) => (
              <div key={idx} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                  <span className="text-white">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}