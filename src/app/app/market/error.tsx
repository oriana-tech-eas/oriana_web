'use client'

import Button from '@/components/Button/Button'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const router = useRouter()
 
  return (
    <div className='flex flex-col items-center justify-center min-h-32 w-full'>
      <div className='mb-5 text-center flex flex-col items-center justify-center'>
      <FaceFrownIcon className='size-24 text-neutral-600'/>
      <h2 className='text-2xl font-bold text-center'>
        Ups! algo salió mal...
      </h2>
      <p className='text-neutral-500 text-xs'>{error?.message}</p>
      </div>
      <div className='flex gap-2'>
        <Button
          variant='secondary-market'
          size='sm'
          onClick={
            () => reset()
          }
        >
          Volver a cargar
        </Button>
        <Button
          variant='primary-market'
          size='sm'
          onClick={() => router.push('/app/market/dashboard')}
        >
          Ir a la página principal
        </Button>
      </div>
    </div>
  )
}