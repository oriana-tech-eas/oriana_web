import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full h-dvh flex justify-center items-center dark:bg-neutral-950'>
      <div className='flex flex-col items-center justify-center'>
        <Image 
          className="animate-pulse"
          src="/printit.svg"
          width={50} 
          height={50} 
          alt="Printit Logo"
          priority
        />
        <p className='text-lg dark:text-neutral-200 mt-4'>Cargando...</p>
        </div>
    </div>
  )
}

export default Loading