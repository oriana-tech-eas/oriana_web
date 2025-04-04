import Link from "next/link";

export default function APIDocSection() {
	return (
		<div id='api-docs' className='bg-gray-50 py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center mb-16'>
					<h2 className='text-base font-semibold leading-7 text-teal-600'>
						Documentación
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Documentación API Completa
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
            Comience rápidamente con nuestra documentación detallada y ejemplos de código.
					</p>
				</div>

				<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
					<div className='bg-gray-800 px-6 py-4'>
						<div className='flex items-center space-x-2'>
							<div className='w-3 h-3 rounded-full bg-red-500'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
							<div className='ml-4 text-gray-200 font-mono text-sm'>
								Referencia
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-5'>
						<div className='md:col-span-1 bg-gray-100 p-6 border-r border-gray-200'>
							<div className='space-y-4'>
								<div className='font-medium text-gray-900'>Endpoints</div>
								<div className='text-sm text-teal-600 hover:text-teal-800 cursor-pointer'>
									/documents
								</div>
								<div className='text-sm text-teal-600 hover:text-teal-800 cursor-pointer'>
									/validation
								</div>
								<div className='text-sm text-teal-600 hover:text-teal-800 cursor-pointer'>
									/templates
								</div>
								<div className='text-sm text-teal-600 hover:text-teal-800 cursor-pointer'>
									/status
								</div>
							</div>
						</div>
						<div className='md:col-span-4 p-6'>
							<h3 className='text-lg font-semibold text-gray-900'>
								Generar un Documento Electrónico
							</h3>
							<div className='mt-4 p-4 bg-gray-50 rounded font-mono text-sm'>
								<div className='text-purple-700'>
									POST /api/v1/documents/invoice
								</div>
								<div className='mt-4 text-gray-800'>Request Body:</div>
								<div className='mt-2 bg-gray-100 p-3 rounded text-gray-600'>
									{`{
                      "client": {
                        "name": "string",
                        "tax_id": "string",
                        "address": "string"
                      },
                      "items": [
                        {
                          "description": "string",
                          "quantity": "number",
                          "unit_price": "number"
                        }
                      ],
                      "tax_rate": "number"
                    }`}
								</div>
							</div>

							<div className='mt-6 flex justify-end'>
								<Link
									href='/app/connect/docs'
									className='text-teal-600 hover:text-teal-800 font-medium'>
									Ver toda la documentación →
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
