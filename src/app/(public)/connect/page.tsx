import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-800 to-purple-600">
        <div className="container mx-auto px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Oriana Connect
              </h1>
              <p className="mt-6 text-lg leading-8">
                API service for generating electronic documents approved by DNIT in Paraguay. Simplify your compliance requirements with our seamless integration.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/app/connect" 
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50"
                >
                  Get Started
                </Link>
                <Link 
                  href="#api-docs" 
                  className="text-base font-semibold leading-6 text-white hover:text-indigo-100"
                >
                  API Documentation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-xl">
                <div className="space-y-4">
                  <div className="bg-indigo-900/20 rounded-md p-4 font-mono text-sm text-white">
                    <div className="text-purple-200">// Example API Request</div>
                    <div className="mt-2">
                      <span className="text-pink-300">POST</span>
                      <span className="text-green-300"> /api/v1/documents/invoice</span>
                    </div>
                    <div className="mt-2 text-blue-200">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-yellow-200">"client"</span>: <span className="text-green-200">"Empresa ABC"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-200">"amount"</span>: <span className="text-purple-200">15000000</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-200">"items"</span>: [...]
                    </div>
                    <div className="text-blue-200">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful API</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Streamline your electronic documentation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our API service simplifies the generation of DNIT-approved electronic documents for businesses in Paraguay.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  title: "DNIT Compliance",
                  description: "Generate documents that are 100% compliant with Paraguay's DNIT requirements and regulations.",
                  icon: "✓"
                },
                {
                  title: "Easy Integration",
                  description: "Simple REST API that integrates with any existing system or software.",
                  icon: "🔌"
                },
                {
                  title: "Real-time Validation",
                  description: "Instant validation ensures all generated documents meet the required standards.",
                  icon: "⚡"
                },
                {
                  title: "Secure Transmission",
                  description: "Encrypted data transmission and secure document storage with compliance tracking.",
                  icon: "🔒"
                },
              ].map((feature, idx) => (
                <div key={idx} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
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

      {/* API Documentation Preview */}
      <div id="api-docs" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Documentation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive API Reference
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get started quickly with our detailed documentation and code examples.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-200 font-mono text-sm">API Reference</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-1 bg-gray-100 p-6 border-r border-gray-200">
                <div className="space-y-4">
                  <div className="font-medium text-gray-900">Endpoints</div>
                  <div className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer">/documents</div>
                  <div className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer">/validation</div>
                  <div className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer">/templates</div>
                  <div className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer">/status</div>
                </div>
              </div>
              <div className="md:col-span-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Generate Electronic Invoice</h3>
                <div className="mt-4 p-4 bg-gray-50 rounded font-mono text-sm">
                  <div className="text-purple-700">POST /api/v1/documents/invoice</div>
                  <div className="mt-4 text-gray-800">Request Body:</div>
                  <div className="mt-2 bg-gray-100 p-3 rounded text-gray-600">
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

                <div className="mt-6 flex justify-end">
                  <Link
                    href="/app/connect/docs"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View full documentation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration with Other Products */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Seamless Integration</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Works with the entire Oriana suite
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Integrate effortlessly with Oriana Market for a complete billing solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 rounded-md text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Oriana Market</h3>
              <p className="mt-2 text-gray-600">
                Automatically generate compliant electronic invoices from your billing system.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 rounded-md text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Oriana People</h3>
              <p className="mt-2 text-gray-600">
                Generate official HR documents and payroll receipts that comply with regulations.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 rounded-md text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Oriana Booking</h3>
              <p className="mt-2 text-gray-600">
                Create appointment confirmations and service receipts with proper legal formatting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your electronic documentation?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Join businesses across Paraguay that trust Oriana Connect for DNIT-compliant electronic documents.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/app/connect"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50"
            >
              Start your integration
            </Link>
            <Link
              href="#"
              className="text-base font-semibold leading-6 text-white hover:text-indigo-200"
            >
              Schedule a demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
