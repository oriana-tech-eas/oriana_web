import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="bg-white">
        {/* Header */}
        <div className="bg-orange-50">
          <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Contacto
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-800">
              Dudas o consultas sobre nuestros servicios? Estamos aquí para ayudarle.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
    </div>
  )
}