const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white dark:bg-neutral-900 rounded-lg shadow-sm bordered-component py-2 w-full'>
      {children}
    </div>
  )
}

export default Card