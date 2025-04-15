import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full h-dvh flex justify-center items-center dark:bg-neutral-950'>
      <div className='flex flex-col items-center justify-center'>
        <Image 
          className="animate-pulse"
          src="/brand/oriana-tech.svg"
          width={120} 
          height={50} 
          alt="Oriana Tech"
          priority
        />
        <p className='text-lg dark:text-neutral-200 mt-4'>Cargando...</p>
        </div>
    </div>
  )
}

export default Loading