export default function IntegrationSectionItem({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className='bg-teal-50 rounded-lg p-6'>
      <div className='h-12 w-12 flex items-center justify-center bg-teal-100 rounded-md text-teal-600 mb-4'>
        {icon}
      </div>
      <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
      <p className='mt-2 text-gray-600'>
        {description}
      </p>
    </div>
  )
}