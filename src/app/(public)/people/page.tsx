import Button from "@/components/Button/Button";
import Link from "next/link";
import SharedHeroSection from "../_shared/components/SharedHeroSection";

export default function Home() {
  return (
    <div className="bg-white -mt-14">
    <SharedHeroSection colors={['from-violet-700', 'to-violet-600']}>
      <div className="text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Oriana People
        </h1>
        <p className="mt-6 text-lg leading-8">
          Simple HR administration system that works independently or integrates seamlessly with Oriana Market. Manage your team efficiently.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link 
            href="/app/people" 
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-violet-700 shadow-sm hover:bg-violet-50"
          >
            Get Started
          </Link>
          <Link 
            href="#features" 
            className="text-base font-semibold leading-6 text-white hover:text-violet-100"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="relative bg-white/10 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="h-12 bg-violet-900/20 rounded flex items-center px-4">
                <div className="h-6 w-6 rounded-full bg-white/40 mr-3"></div>
                <div className="h-4 w-32 bg-white/40 rounded"></div>
              </div>
            </div>
            
            <div className="space-y-3 p-4 bg-violet-900/10 rounded">
              <div className="h-4 w-full bg-white/30 rounded"></div>
              <div className="h-4 w-2/3 bg-white/30 rounded"></div>
              <div className="h-4 w-5/6 bg-white/30 rounded"></div>
              <div className="h-4 w-3/4 bg-white/30 rounded"></div>
            </div>
            
            <div className="space-y-3 p-4 bg-violet-900/10 rounded">
              <div className="h-20 w-20 mx-auto rounded-full bg-white/30"></div>
              <div className="h-4 w-3/4 mx-auto bg-white/30 rounded"></div>
              <div className="h-4 w-1/2 mx-auto bg-white/30 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </SharedHeroSection>

    {/* Features Section */}
    <div id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-violet-600">HR Management</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oriana People simplifies HR administration with intuitive tools that help you take care of your most valuable asset - your employees.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {[
              {
                title: "Employee Records",
                description: "Maintain comprehensive employee profiles with all relevant personal and professional information.",
                icon: "👤"
              },
              {
                title: "Leave Management",
                description: "Track vacation, sick leave, and other time off with automated accrual and approval workflows.",
                icon: "🗓️"
              },
              {
                title: "Payroll Integration",
                description: "Seamlessly connect with Oriana Market for integrated payroll processing and financial management.",
                icon: "💰"
              },
              {
                title: "Performance Tracking",
                description: "Document evaluations, goals, and achievements to support employee development.",
                icon: "📈"
              },
            ].map((feature, idx) => (
              <div key={idx} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600">
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

    {/* How It Works */}
    <div className="bg-violet-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-violet-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simplify your HR processes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our intuitive system helps you manage your team with minimal effort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Add Employees</h3>
            <p className="mt-2 text-gray-600">
              Easily add new team members and maintain their complete personnel records.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Manage Time Off</h3>
            <p className="mt-2 text-gray-600">
              Handle leave requests, approvals, and balance tracking in one place.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Generate Reports</h3>
            <p className="mt-2 text-gray-600">
              Access insights with customizable reports on workforce metrics and trends.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Integration Section */}
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Seamless integration with Oriana Market
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect your HR system with financial management for complete control over employee costs and payroll.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Automate payroll processing based on attendance and leave data
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Generate financial reports that include complete labor costs
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Streamline expense reimbursements and employee benefits
                </p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="p-8 bg-violet-50 rounded-lg">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-violet-800 font-bold text-xl">HR</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-blue-800 font-bold text-xl">ERP</div>
              </div>
              <div className="h-64 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-violet-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-violet-700">
      <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to streamline your HR management?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-violet-100">
          Join companies that trust Oriana People to manage their most valuable asset - their employees.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/app/people"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-violet-700 shadow-sm hover:bg-violet-50"
          >
            Start your free trial
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 text-white hover:text-violet-200"
          >
            Learn about pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
